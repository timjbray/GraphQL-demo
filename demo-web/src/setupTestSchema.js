// import Faker from 'faker';
import fs from 'fs';
import { makeExecutableSchema } from 'graphql-tools';
// addMockFunctionsToSchema

const schemaString = fs.readFileSync('schema.graphql');

// Make a GraphQL schema with no resolvers
export const testSchema = makeExecutableSchema({ typeDefs: schemaString.toString() });

export const wait = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};
