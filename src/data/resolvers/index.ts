// Expose API of resolvers for memSchema
export { createFriend } from './createFriend';
export { getFriend } from './getFriend';
// Import resolvers for (persistent) schema
import { getFriend } from './getFriend';
import { createFriend } from './createFriend';

// Setup model(s)
import { Friend, ISampleData } from '../models';

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
export const Samples: ISampleData = {
    friend: sampleFriendData
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