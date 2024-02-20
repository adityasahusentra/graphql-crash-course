import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//server setup

const server = new ApolloServer({
  //typedefs - type definitions and data type and the relationship they have with other data types
  //resolvers - resolver functions, that determine how we respond to queries for different data on the graph.
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port 4000");
