# Specification

## Summary
**Goal:** Build a responsive public marketing website for a Taekwondo academy with clear navigation, a persistent contact form, and an admin-only inquiries viewer protected by Internet Identity.

**Planned changes:**
- Create a responsive marketing site with navigation and sections/pages: Home (hero + highlights), About the Academy, Programs/Classes, Schedule, Instructors, Pricing/Memberships, FAQ, and Contact, using sensible placeholder English copy (no lorem ipsum).
- Implement a Contact form (name, email, optional phone, message) with inline validation, loading/error states, success confirmation, and form reset on submit.
- Add a Motoko backend API to store contact inquiries in stable storage and return them (persisting across reloads).
- Add an admin-only view that requires Internet Identity login, restricts access to canister-defined admin principal(s), and lists inquiries (most recent first) with timestamps and basic empty/loading/error states.
- Apply a consistent martial-arts academy visual theme (Tailwind styling) across the site, avoiding blue/purple as the primary theme colors.
- Add and use generated static images from `frontend/public/assets/generated` for the hero and branding areas (header/footer logo).

**User-visible outcome:** Visitors can browse a polished, mobile-friendly Taekwondo academy website and submit inquiries via a contact form; authorized staff can log in with Internet Identity to view submitted inquiries in an admin page.
