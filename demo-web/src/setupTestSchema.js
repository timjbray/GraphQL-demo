import faker from 'faker';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

// const schemaString = fs.readFileSync('schema.graphql');
import { schemaString } from '../schema.js';

// Make a GraphQL schema with no resolvers
export const testSchema = makeExecutableSchema({ typeDefs: schemaString.toString() });

const mocks = {
  Episode: () => ({
    name: () => faker.random.words(2),
  }),
  EpisodeImage: () => ({
    medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/75/188958.jpg',
  }),
};

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema: testSchema, mocks });

export const wait = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};
