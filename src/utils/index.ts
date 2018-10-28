import graphQLHTTP from "express-graphql";
import { createFriend, getFriend } from "../data/mem/resolvers";
import { memSchema, schema } from "../data/mem/schema";
import { Samples as getSamples } from "../data/models";

/**
 * This presents a more inspectable definition of the GraphQL configuration
 * that supports the mapping of types to resolvers.
 */
export const initMemSchema = () =>
  graphQLHTTP({
    graphiql: true,
    schema: memSchema,
    rootValue: {
      getSamples,
      createFriend,
      getFriend
    }
  });

/**
 * This presents a less verbose, more scalable mapping of types to resolvers
 * via the executable schema in graphql-tools
 */
export const initSchema = () =>
  graphQLHTTP({
    graphiql: true,
    schema
  });
