import { buildSchema, GraphQLSchema } from "graphql";
import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
  type SampleData {
    friend: Friend
  }

  type Email {
    email: String
  }

  enum Gender {
      MALE
      FEMALE
      OTHER
  }

  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    emails: [Email]!
  }

  type Query {
    getSamples: SampleData,
    getFriend(id: ID): Friend
  }

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    gender: Gender
    age: Int
    language: String
    email: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

// Full-featured, persistent schema
export const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

// In-memory schema
export const memSchema = buildSchema(typeDefs);