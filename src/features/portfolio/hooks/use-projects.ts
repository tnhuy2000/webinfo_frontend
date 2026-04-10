import { useQuery } from '@apollo/client/react';
import { GET_PROJECTS, GET_PROJECT_BY_SLUG } from '@/codegen/graphql-definition/web-service/queries';
import type {
  GetProjectsQuery,
  GetProjectsQueryVariables,
  GetProjectBySlugQuery,
  GetProjectBySlugQueryVariables,
  ProjectStatus,
} from '@/graphql/generated';

interface UseProjectsOptions {
  isActive?: boolean;
  isFeatured?: boolean;
  status?: ProjectStatus;
}

export const useProjects = (options?: UseProjectsOptions) => {
  return useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GET_PROJECTS, {
    variables: {
      isActive: options?.isActive ?? null,
      isFeatured: options?.isFeatured ?? null,
      status: options?.status ?? null,
    },
  });
};

export const useProjectBySlug = (slug: string) => {
  return useQuery<GetProjectBySlugQuery, GetProjectBySlugQueryVariables>(GET_PROJECT_BY_SLUG, {
    variables: { slug },
    skip: !slug,
  });
};
