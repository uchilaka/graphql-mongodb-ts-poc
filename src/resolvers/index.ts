import * as crypto from "crypto";

import { Friend } from '../models';

// Mock database
const friendDb = {};

// Define resolvers
export const getFriend = ({ id }) => {
    if (typeof id === 'string') {
        return new Friend(id, friendDb[id]);        
    }
    // else return recent friends
}

export const createFriend = ({ input }) => {
    let id = crypto.randomBytes(10).toString('hex');
    friendDb[id] = input;
    return new Friend(id, input);
};

// Define sample datasets
const sampleFriendData: Friend = {
    id: "28718992",
    firstName: "Manny",
    lastName: "Henri",
    gender: "Male",
    language: "English",
    emails: [{ email: "me@me.com" }, { email: "another@me.com" }]
};

// A sample dataset, showing implementations of the models
export const Samples = {
    friend: sampleFriendData
}
