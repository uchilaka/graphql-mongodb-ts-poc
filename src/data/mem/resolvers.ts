import _ from "lodash";
import * as crypto from "crypto";

// Setup model(s)
import { Friend, ISampleData, Samples } from '../models';

import memDb from './memdb';

export const createFriend = function (_root, xPayload) {
    const { input } = _.isEmpty(_root) ? xPayload : _root;
    let id = crypto.randomBytes(10).toString('hex');
    memDb[id] = input;
    return new Friend(id, input);
};

export const getFriend = (_root, xPayload) => {
    const { id } = _.isEmpty(_root) ? xPayload : _root;
    if (typeof id === 'string') {
        return new Friend(id, memDb[id]);
    }
    // else return recent friends
}

// Re-map resolvers definition
export const resolvers = {
    Query: {
        getSamples: (): ISampleData => Samples,
        getFriend,
    },
    Mutation: {
        createFriend,
    },
};