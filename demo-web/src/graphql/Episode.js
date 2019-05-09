import { gql } from 'apollo-boost';

export const EPISODE_QUERY = gql`
  query episodes($name: String) {
    episodes(name: $name) {
      id
      name
      season
      number
      summary
      images {
        medium
      }
    }
  }
`;
