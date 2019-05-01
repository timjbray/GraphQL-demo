import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Movie } from './Movie';

const TV_QUERY = gql`
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

export const MovieList = ({ show }) => (
  <Query query={TV_QUERY} variables={{ name: show }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.episodes.map(({ name, images, summary, season, number }, key) => (
        <Movie
          key={key}
          name={name}
          image={images ? images.medium : ''}
          summary={summary}
          season={season}
          number={number}
        />
      ));
    }}
  </Query>
);
