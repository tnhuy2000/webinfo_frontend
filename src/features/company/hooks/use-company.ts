import { useQuery } from '@apollo/client/react';
import { GET_COMPANIES, GET_COMPANY } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetCompaniesQuery,
  GetCompanyQuery,
  GetCompanyQueryVariables
} from '@/graphql/generated';

export const useCompanies = () => {
  return useQuery<GetCompaniesQuery>(GET_COMPANIES);
};

export const useCompany = (id: string) => {
  return useQuery<GetCompanyQuery, GetCompanyQueryVariables>(GET_COMPANY, {
    variables: { id },
    skip: !id,
  });
};
