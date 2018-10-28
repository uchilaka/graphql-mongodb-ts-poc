import graphQLHTTP from "express-graphql";
import { Samples as getSamples } from '../data/models';
import { memSchema, schema } from '../data/mem/schema';
import { createFriend, getFriend } from "../data/mem/resolvers";

export const initMemSchema = () => graphQLHTTP({
    graphiql: true,
    schema: memSchema,
    rootValue: {
        getSamples, 
        createFriend,
        getFriend
    }
});

export const initSchema = () => graphQLHTTP({
    graphiql: true,
    schema
});