import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import _db from "./_db.js";

//server setup
const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    game(_, args) {
      return _db.games.find((r) => r.id === args.id);
    },
    authors() {
      return _db.authors;
    },
    author(_, args) {
      return _db.authors.find((r) => r.id === args.id);
    },
    reviews() {
      return _db.reviews;
    },
    review(_, args) {
      return _db.reviews.find((r) => r.id === args.id);
    },
  },
};
const server = new ApolloServer({
  //typedefs - type definitions and data type and the relationship they have with other data types
  typeDefs,
  //resolvers - resolver functions, that determine how we respond to queries for different data on the graph.
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port 4000");
