import { useQuery } from '@apollo/client/react';
import { GET_TEAM_MEMBERS, GET_TEAM_MEMBER } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetTeamMembersQuery,
  GetTeamMembersQueryVariables,
  GetTeamMemberQuery,
  GetTeamMemberQueryVariables
} from '@/graphql/generated';

export const useTeamMembers = (isActive?: boolean) => {
  return useQuery<GetTeamMembersQuery, GetTeamMembersQueryVariables>(GET_TEAM_MEMBERS, {
    variables: { isActive: isActive ?? null },
  });
};

export const useTeamMember = (id: string) => {
  return useQuery<GetTeamMemberQuery, GetTeamMemberQueryVariables>(GET_TEAM_MEMBER, {
    variables: { id },
    skip: !id,
  });
};
