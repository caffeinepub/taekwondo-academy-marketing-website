import { ReactNode } from 'react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useQuery } from '@tanstack/react-query';
import { useActor } from '@/hooks/useActor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Loader2 } from 'lucide-react';
import LoginButton from './LoginButton';

interface RequireAdminProps {
  children: ReactNode;
}

export default function RequireAdmin({ children }: RequireAdminProps) {
  const { identity, isInitializing } = useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor();

  const { data: isAdmin, isLoading: isCheckingAdmin, isFetched } = useQuery<boolean>({
    queryKey: ['isAdmin', identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !!identity && !actorFetching,
    retry: false
  });

  const isLoading = isInitializing || actorFetching || isCheckingAdmin;

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md">
          <CardContent className="pt-12 pb-12 text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!identity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Access Required</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Please log in to access the admin panel.
            </p>
            <LoginButton />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show access denied if not admin
  if (isFetched && !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md border-destructive">
          <CardContent className="pt-12 pb-12 text-center">
            <ShieldAlert className="h-16 w-16 text-destructive mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
            <p className="text-muted-foreground mb-6">
              You do not have permission to access this area. Only administrators can view contact inquiries.
            </p>
            <div className="flex gap-2 justify-center">
              <Button onClick={() => (window.location.hash = '#/')}>
                Return to Home
              </Button>
              <LoginButton />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render children if admin
  return <>{children}</>;
}
