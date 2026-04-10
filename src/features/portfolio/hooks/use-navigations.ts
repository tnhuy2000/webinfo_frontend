import { useQuery } from '@apollo/client/react';
import { GET_NAVIGATIONS } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetNavigationsQuery,
  GetNavigationsQueryVariables,
} from '@/graphql/generated';

export const useNavigations = (isActive?: boolean) => {
  return useQuery<GetNavigationsQuery, GetNavigationsQueryVariables>(GET_NAVIGATIONS, {
    variables: { isActive: isActive ?? null },
  });
};
