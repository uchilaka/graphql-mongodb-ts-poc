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
    getFriend(email: String, id: ID): Friend
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

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type OptionalPick<T, K extends keyof T> = {
    [P in K]?: T[P];
}

export interface FriendObject {
    id?: string;
    email: string;
    emails: IEmail[];
    firstName: string;
    lastName?: string;
    age: number,
    gender?: string;
    language?: string;
}

export type FriendInput = Pick<FriendObject, "id" | "email" | "firstName" | "lastName" | "age" | "gender" | "language">;

export type IFriend = OptionalPick<FriendObject, "id" | "emails" | "firstName" | "lastName" | "age" | "gender" | "language">;
export interface IEmail {
    email: string;
}

export class Friend {
    id: string;
    firstName: string;
    lastName?: string;
    gender?: string;
    age?: number;
    language?: string;
    emails: IEmail[] = [];

    constructor(id, { firstName, lastName, age, gender, language, email }: FriendInput) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.language = language;
        // Email was provided
        this.emails = [...this.emails, { email }];
    }
}

export interface ISampleData {
    friend: Friend;
}

export interface IResolverDef {
    Query: { [k: string]: any };
    Mutation: { [k: string]: any };
    [k: string]: any;
}

