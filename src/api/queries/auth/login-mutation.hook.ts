import { ApiClient } from '@/api/utils/api-client';
import { LoginRequest, UserInfoResponse } from '@/api/utils/api-requests';
import { UseCustomMutationOptions } from '@/lib/react-query-helpers';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = (
  options?: UseCustomMutationOptions<UserInfoResponse, Error, LoginRequest>,
) => {
  return useMutation<UserInfoResponse, Error, LoginRequest>({
    mutationFn: async data => await ApiClient.authenticationController.login(data),
    ...options,
  });
};
