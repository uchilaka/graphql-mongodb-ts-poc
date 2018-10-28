import { buildSchema, GraphQLSchema } from "graphql";
import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
import { TypeDefs as typeDefs } from '../typedefs';

// Full-featured, persistent schema
export const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

// In-memory schema
export const memSchema = buildSchema(typeDefs);