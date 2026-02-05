import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  email: string;
  phone: string | null;
  message: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.submitContactForm(data.name, data.email, data.phone, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    }
  });
}
