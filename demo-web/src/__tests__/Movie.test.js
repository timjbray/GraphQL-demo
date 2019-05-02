import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloProvider } from 'react-apollo';
import { mount } from 'enzyme';

import { MovieList } from '../MovieList';
import { testSchema, wait } from '../setupTestSchema';

// addMockFunctionsToSchema

describe('Movie', () => {
  let client;

  beforeAll(() => {
    client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new SchemaLink({ schema: testSchema }),
    });
  });

  it('Queries cardDetail', async () => {
    const wrapper = mount(
      <ApolloProvider client={client}>
        <MovieList />
      </ApolloProvider>
    );

    await wait(0); // Use a waiting library of your choice

    const text = wrapper.text();
    expect(text).toMatch(/Empty/);
  });
});
