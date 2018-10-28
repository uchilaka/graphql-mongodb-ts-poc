import mongoose from "./mongoose";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
// import { definedResolvers } from ".";
import { resolvers, } from "./resolvers";
import { TypeDefs as globalTypeDefs, IResolverDef } from "../models";

const typeDefs = `
${globalTypeDefs}

# We need to tell the server which types represent the root query
# and root mutation types. They are called RootQuery and RootMutation by convention
schema {
    query: Query,
    mutation: Mutation
}
`;

interface IMongoDef {
    Friend: mongoose.Model<mongoose.Document>
}

interface ISchemaDef {
    typeDefs: string;
    resolvers: IResolverDef
}

const emailSchema = new mongoose.Schema({
    email: String
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    gender: String,
    age: Number,
    language: String,
    emails: [emailSchema]
});

export const MongoModel: IMongoDef = {
    Friend: mongoose.model('friends', friendSchema)
};

export const schema: GraphQLSchema = makeExecutableSchema(<ISchemaDef>{
    typeDefs,
    resolvers
});

export default schema;