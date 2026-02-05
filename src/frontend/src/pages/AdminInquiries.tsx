import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Phone, Calendar, Loader2, Inbox } from 'lucide-react';
import { useAdminInquiries } from '@/hooks/useAdminInquiries';
import RequireAdmin from '@/components/auth/RequireAdmin';
import LoginButton from '@/components/auth/LoginButton';

function AdminInquiriesContent() {
  const { data: inquiries, isLoading, isError, error } = useAdminInquiries();

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1_000_000);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => (window.location.hash = '#/')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Contact Inquiries</h1>
                <p className="text-sm text-muted-foreground">
                  Manage and review contact form submissions
                </p>
              </div>
            </div>
            <LoginButton />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-8">
        {isLoading && (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Loading inquiries...</p>
            </CardContent>
          </Card>
        )}

        {isError && (
          <Card className="border-destructive">
            <CardContent className="pt-12 pb-12 text-center">
              <p className="text-destructive mb-4">
                {error?.message || 'Failed to load inquiries'}
              </p>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </CardContent>
          </Card>
        )}

        {!isLoading && !isError && inquiries && inquiries.length === 0 && (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <Inbox className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Inquiries Yet</h3>
              <p className="text-muted-foreground">
                Contact form submissions will appear here.
              </p>
            </CardContent>
          </Card>
        )}

        {!isLoading && !isError && inquiries && inquiries.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                {inquiries.length} {inquiries.length === 1 ? 'inquiry' : 'inquiries'} total
              </p>
            </div>

            {inquiries.map((inquiry, index) => (
              <Card key={index} className="border-2 hover:shadow-martial transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{inquiry.name}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          <a
                            href={`mailto:${inquiry.email}`}
                            className="hover:text-primary transition-colors"
                          >
                            {inquiry.email}
                          </a>
                        </div>
                        {inquiry.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            <a
                              href={`tel:${inquiry.phone}`}
                              className="hover:text-primary transition-colors"
                            >
                              {inquiry.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1 whitespace-nowrap">
                      <Calendar className="h-3 w-3" />
                      {formatDate(inquiry.timestamp)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-md p-4">
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {inquiry.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default function AdminInquiries() {
  return (
    <RequireAdmin>
      <AdminInquiriesContent />
    </RequireAdmin>
  );
}
