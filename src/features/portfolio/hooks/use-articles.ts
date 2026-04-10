import { useQuery } from '@apollo/client/react';
import { GET_ARTICLES, GET_ARTICLE_BY_SLUG } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetArticlesQuery,
  GetArticlesQueryVariables,
  GetArticleBySlugQuery,
  GetArticleBySlugQueryVariables,
  ArticleStatus,
} from '@/graphql/generated';

interface UseArticlesOptions {
  isActive?: boolean;
  isFeatured?: boolean;
  status?: ArticleStatus;
}

export const useArticles = (options?: UseArticlesOptions) => {
  return useQuery<GetArticlesQuery, GetArticlesQueryVariables>(GET_ARTICLES, {
    variables: {
      isActive: options?.isActive ?? null,
      isFeatured: options?.isFeatured ?? null,
      status: options?.status ?? null,
    },
  });
};

export const useArticleBySlug = (slug: string) => {
  return useQuery<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>(GET_ARTICLE_BY_SLUG, {
    variables: { slug },
    skip: !slug,
  });
};
