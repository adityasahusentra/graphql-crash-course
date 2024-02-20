import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import _db from "./_db.js";

//server setup
const resolvers = {
  Query: {
    games() {
      _db.games;
    },
    authors() {
      return _db.authors;
    },
    reviews() {
      return _db.reviews;
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
