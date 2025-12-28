import { useMutation, useQuery } from '@apollo/client/react';
import { GET_CONTACT_INFO } from '@/codegen/graphql-definition/web-service/queries';
import { CREATE_CONTACT_MESSAGE } from '@/codegen/graphql-definition/web-service/mutations';
import type {
  GetContactInfoQuery,
  CreateContactMessageMutation,
  CreateContactMessageMutationVariables
} from '@/graphql/generated';

export const useContactInfo = () => {
  return useQuery<GetContactInfoQuery>(GET_CONTACT_INFO);
};

export const useCreateContactMessage = () => {
  return useMutation<CreateContactMessageMutation, CreateContactMessageMutationVariables>(CREATE_CONTACT_MESSAGE);
};
