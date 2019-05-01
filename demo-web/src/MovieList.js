import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Movie } from './Movie';

// const MOVIE_QUERY = gql`
//   query movies {
//     movies {
//       title
//       year
//       release_date
//       budget
//       gross
//     }
//   }
// `;

const MOVIE_QUERY = gql`
  query episodes {
    episodes {
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

export const MovieList = () => (
  <Query query={MOVIE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.episodes.map(({ name, images, summary, season, number }, key) => (
        <Movie
          key={key}
          name={name}
          image={images.medium}
          summary={summary}
          season={season}
          number={number}
        />
      ));
    }}
  </Query>
);
