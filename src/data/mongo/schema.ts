import mongoose from "./mongoose";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
import { TypeDefs as typeDefs } from "../models";

interface IMongoDef {
    Friend: mongoose.Model<mongoose.Document>
}

const emailSchema = new mongoose.Schema({
    email: String
});
export const Email = mongoose.model('email', emailSchema);

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    gender: String,
    age: Number,
    language: String,
    emails: [Email]
});

export const MongoModel: IMongoDef = {
    Friend: mongoose.model('friends', friendSchema)
};

// export const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });