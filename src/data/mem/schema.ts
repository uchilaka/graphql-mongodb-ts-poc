import { buildSchema, GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { TypeDefs as typeDefs } from "../models";
import { resolvers } from "./resolvers";

// Full-featured, persistent schema
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// In-memory schema
export const memSchema = buildSchema(typeDefs);

export default schema;
