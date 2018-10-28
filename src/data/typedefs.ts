export const TypeDefs = `
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

export default TypeDefs;