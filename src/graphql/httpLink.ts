import { HttpLink } from '@apollo/client';

export const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI_CLIENTSIDE || 'http://localhost:3005/graphql',
  credentials: 'include',
});
