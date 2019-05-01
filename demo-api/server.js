const { ApolloServer, gql } = require('apollo-server');

// from here: https://github.com/jdorfman/awesome-json-datasets
const theWalkingDead = require('./data/the_walking_dead.json');
const gameOfThrones = require('./data/game_of_thrones.json');
const siliconValley = require('./data/silicon_valley.json');
const southPark = require('./data/south_park.json');

const seasons = data => {
  return { data, episodes: data.length, seasons: data[data.length - 1].season };
};

const shows = [
  {
    name: 'The Walking Dead',
    ...seasons(theWalkingDead),
  },
  {
    name: 'Silicon Valley',
    ...seasons(siliconValley),
  },
  {
    name: 'Game of Thrones',
    ...seasons(gameOfThrones),
  },
  {
    name: 'South Park',
    ...seasons(southPark),
  },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Show {
    name: String
    seasons: Int
    episodes: Int
  }

  type EpisodeImage {
    medium: String
    original: String
  }

  type Episode {
    id: ID
    name: String
    season: Int
    number: Int
    airdate: String
    summary: String
    images: EpisodeImage
  }

  type Query {
    shows: [Show]
    episodes(name: String, season: Int): [Episode]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.
const resolvers = {
  Query: {
    shows: () => shows,
    episodes: (_, args) => {
      // find show (or return default)
      const show = args.name ? shows.find(v => v.name === args.name) : shows[0];

      // filter by season?
      return args.season ? show.data.filter(v => v.season === args.season) : show.data;
    },
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server
server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`);
});
