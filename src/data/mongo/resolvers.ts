import { Friend, ISampleData, Samples } from '../models';
import { MongoModel } from './schema';

export const createFriend = (_root, { input }) => {
    const newFriend = new MongoModel.Friend(<Partial<Friend>>{
        firstName: input.firstName,
        lastName: input.lastName,
        age: input.age,
        gender: input.gender,
        emails: [{ email: input.email }]
    });

    newFriend.id = newFriend._id;

    return new Promise((resolve, reject) => {
        newFriend.save((err) => {
            if (err) reject(err);
            else resolve(newFriend);
        });
    });
};

// Map resolver definition(s)
export const resolvers = {
    Query: {
        getSamples: (): ISampleData => Samples,
        // getFriend,
    },
    Mutation: {
        createFriend,
    },
};