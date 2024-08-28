import { ApiClient } from '@/api/utils/api-client';
import { RegisterRequest, UserInfoResponse } from '@/api/utils/api-requests';
import { UseCustomMutationOptions } from '@/lib/react-query-helpers';
import { useMutation } from '@tanstack/react-query';

export const useSignUpMutation = (
  options?: UseCustomMutationOptions<UserInfoResponse, Error, RegisterRequest>,
) => {
  return useMutation<UserInfoResponse, Error, RegisterRequest>({
    mutationFn: async data => await ApiClient.authenticationController.register(data),
    ...options,
  });
};
