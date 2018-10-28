import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { IResolverDef, TypeDefs as globalTypeDefs } from "../models";
// import mongoose from "./mongoose";
import { Document, Model, mongoose, Schema } from "./mongoose";
// import { connectedMongoose as mongoose } from "./mongoose";
// import { definedResolvers } from ".";
import { resolvers } from "./resolvers";

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
  Friend: Model<Document>;
}

interface ISchemaDef {
  typeDefs: string;
  resolvers: IResolverDef;
}

const emailSchema = new Schema({
  email: String
});

const friendSchema = new Schema({
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
  Friend: mongoose.model("friends", friendSchema)
};

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
} as ISchemaDef);

export default schema;
