import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Principal "mo:core/Principal";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : ?Text;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : ?Text, message : Text) : async () {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("Name, email, and message are required fields. Incomplete contact form submission rejected.");
    };

    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };

    submissions.toArray();
  };
};
