export * from ".";
import { ISampleData, Samples } from "../models";
import { createFriend } from "./resolvers";

export const definedResolvers = {
  Query: {
    getSamples: (): ISampleData => Samples
    // getFriend,
  },
  Mutation: {
    createFriend
  }
};

export { mongoDbMiddleware } from "./middleware";
