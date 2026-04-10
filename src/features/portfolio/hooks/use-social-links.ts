import { useQuery } from '@apollo/client/react';
import { GET_SOCIAL_LINKS } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetSocialLinksQuery,
  GetSocialLinksQueryVariables,
} from '@/graphql/generated';

export const useSocialLinks = (isActive?: boolean) => {
  return useQuery<GetSocialLinksQuery, GetSocialLinksQueryVariables>(GET_SOCIAL_LINKS, {
    variables: { isActive: isActive ?? null },
  });
};
