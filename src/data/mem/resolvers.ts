import * as crypto from "crypto";
import _ from "lodash";

// Setup model(s)
import { Friend, ISampleData, Samples } from "../models";

import memDb from "./memdb";

export const createFriend = (_ROOT, xPayload) => {
  const { input } = _.isEmpty(_ROOT) ? xPayload : _ROOT;
  const id = crypto.randomBytes(10).toString("hex");
  memDb[id] = input;
  return new Friend(id, input);
};

export const getFriend = (_ROOT, xPayload) => {
  const { id } = _.isEmpty(_ROOT) ? xPayload : _ROOT;
  if (typeof id === "string") {
    return new Friend(id, memDb[id]);
  }
  // else throw an error
};

// Re-map resolvers definition
export const resolvers = {
  Query: {
    getSamples: (): ISampleData => Samples,
    getFriend
  },
  Mutation: {
    createFriend
  }
};

export default resolvers;
