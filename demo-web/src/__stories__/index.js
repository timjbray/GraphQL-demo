import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloProvider } from 'react-apollo';
import { storiesOf } from '@storybook/react';

import { MovieList } from '../MovieList';
import { testSchema } from '../setupTestSchema';

// import { action } from '@storybook/addon-actions';

// import { Button, Welcome } from '@storybook/react/demo';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema: testSchema }),
});

storiesOf('Movie', module).add('Movie List', () => (
  <ApolloProvider client={client}>
    <MovieList />
  </ApolloProvider>
));
