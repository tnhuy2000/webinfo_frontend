import { useQuery } from '@apollo/client/react';
import { GET_WORK_EXPERIENCES } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetWorkExperiencesQuery,
  GetWorkExperiencesQueryVariables,
} from '@/graphql/generated';

export const useWorkExperiences = (isActive?: boolean) => {
  return useQuery<GetWorkExperiencesQuery, GetWorkExperiencesQueryVariables>(GET_WORK_EXPERIENCES, {
    variables: { isActive: isActive ?? null },
  });
};
