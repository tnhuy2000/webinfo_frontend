import { useQuery } from '@apollo/client/react';
import { GET_SKILLS } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetSkillsQuery,
  GetSkillsQueryVariables,
} from '@/graphql/generated';

export const useSkills = (isActive?: boolean) => {
  return useQuery<GetSkillsQuery, GetSkillsQueryVariables>(GET_SKILLS, {
    variables: { isActive: isActive ?? null },
  });
};
