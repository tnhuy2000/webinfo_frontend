import { useQuery } from '@apollo/client/react';
import { GET_TAGS, GET_TAG_BY_SLUG } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetTagsQuery,
  GetTagsQueryVariables,
  GetTagBySlugQuery,
  GetTagBySlugQueryVariables,
} from '@/graphql/generated';

export const useTags = (isActive?: boolean) => {
  return useQuery<GetTagsQuery, GetTagsQueryVariables>(GET_TAGS, {
    variables: { isActive: isActive ?? null },
  });
};

export const useTagBySlug = (slug: string) => {
  return useQuery<GetTagBySlugQuery, GetTagBySlugQueryVariables>(GET_TAG_BY_SLUG, {
    variables: { slug },
    skip: !slug,
  });
};
