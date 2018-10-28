export { Samples } from '../models';
import { Samples, IFriend, IResolverDef } from '../models';
import { MongoModel } from './schema';

interface IUniqueUserQuery {
    email?: string;
    _id?: string;
}

export const createFriend = async (_root, { input }): Promise<IFriend> => {
    const newFriend = new MongoModel.Friend(<Partial<IFriend>>{
        firstName: input.firstName,
        lastName: input.lastName,
        age: input.age,
        gender: input.gender,
        emails: [{ email: input.email }]
    });

    newFriend.id = newFriend._id;

    return new Promise((resolve, reject) => {
        newFriend.save((err) => {
            if (err) return reject(err);    
            return resolve(newFriend);
        });
    });
};

export const getFriend = async (_root, { id, email }): Promise<IFriend> => {
    return new Promise((resolve, reject) => {
        let predicate: IUniqueUserQuery = {};
        if (email) {
            predicate['emails.email'] = email;
        } else if (id) {
            predicate._id = id;
        } else {
            throw new Error('Either id or email is required');
        }
        MongoModel.Friend.findOne(predicate, (err, obj) => {
            if (err) return reject(err);
            return resolve(<IFriend>obj);
        });
    });
}

// Map resolver definition(s)
export const resolvers: IResolverDef = {
    Query: {
        getSamples: () => Samples,
        getFriend,
    },
    Mutation: {
        createFriend,
    },
};

export default resolvers;