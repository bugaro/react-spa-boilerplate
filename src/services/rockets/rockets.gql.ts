import { gql } from 'graphql-request';
gql`
  query getRockets {
    rockets {
      id
      name
      description
    }
  }
`;
