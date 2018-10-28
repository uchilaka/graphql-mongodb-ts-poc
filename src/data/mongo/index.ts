export * from '.';
import { Samples, ISampleData } from '../models';
import { createFriend } from './resolvers';

export const definedResolvers = {
    Query: {
        getSamples: (): ISampleData => Samples,
        // getFriend,
    },
    Mutation: {
        createFriend,
    },
};