export const typeDefs = `#graphql
type Game {
    id: ID!,
    title: String!,
    platform: [String!]!
}
type Review {
    id: ID!,
    rating: Int!,
    content: String!
}
type Author {
    id: ID!,
    rating: Int!,
    verified: Boolean!
}

//mandatory field for entry point
//user can request data only from reviews
type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
}

`;

//data types ---- int, float, string, boolean, ID
