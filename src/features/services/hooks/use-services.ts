import { useQuery } from '@apollo/client/react';
import { GET_SERVICES, GET_SERVICE } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetServicesQuery,
  GetServicesQueryVariables,
  GetServiceQuery,
  GetServiceQueryVariables
} from '@/graphql/generated';

export const useServices = (isActive?: boolean) => {
  return useQuery<GetServicesQuery, GetServicesQueryVariables>(GET_SERVICES, {
    variables: { isActive: isActive ?? null },
  });
};

export const useService = (id: string) => {
  return useQuery<GetServiceQuery, GetServiceQueryVariables>(GET_SERVICE, {
    variables: { id },
    skip: !id,
  });
};
