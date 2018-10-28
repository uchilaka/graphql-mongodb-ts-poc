import graphQLHTTP from "express-graphql";
import { memSchema, schema } from '../data/mem/schema';
import { Samples, createFriend, getFriend } from "../data/mem/resolvers";

export const initMemSchema = () => graphQLHTTP({
    graphiql: true,
    schema: memSchema,
    rootValue: {
        getSamples: Samples, 
        createFriend,
        getFriend
    }
});

export const initSchema = () => graphQLHTTP({
    graphiql: true,
    schema
});