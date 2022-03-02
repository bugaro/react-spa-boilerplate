import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generatedModel';
const client = new GraphQLClient('https://api.spacex.land/graphql');
export const gqlClient = getSdk(client);
