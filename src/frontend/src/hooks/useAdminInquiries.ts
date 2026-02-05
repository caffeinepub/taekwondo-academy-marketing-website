import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactSubmission } from '../backend';

export function useAdminInquiries() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      const submissions = await actor.getAllSubmissions();
      return submissions.sort((a, b) => Number(b.timestamp - a.timestamp));
    },
    enabled: !!actor && !actorFetching,
    retry: false
  });
}
