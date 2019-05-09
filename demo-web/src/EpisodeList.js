import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { EPISODE_QUERY } from './graphql/Episode';
import { Episode } from './Episode';

export const EpisodeList = ({ show }) => (
  <Query query={EPISODE_QUERY} variables={{ name: show }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      if (!data || !data.episodes) return <p>Empty.</p>;
      console.log(data);

      return data.episodes.map(({ name, images, summary, season, number }, key) => (
        <Episode
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

EpisodeList.propTypes = {
  show: PropTypes.string,
};
