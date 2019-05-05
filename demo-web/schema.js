export const schemaString = `# source: http://localhost:4000/graphql
# timestamp: Thu May 02 2019 19:55:43 GMT+1000 (Australian Eastern Standard Time)

directive @cacheControl(
  maxAge: Int
  scope: CacheControlScope
) on FIELD_DEFINITION | OBJECT | INTERFACE

enum CacheControlScope {
  PUBLIC
  PRIVATE
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

type EpisodeImage {
  medium: String
  original: String
}

type Query {
  shows: [Show]
  episodes(name: String, season: Int): [Episode]
}

type Show {
  name: String
  seasons: Int
  episodes: Int
}

`;
