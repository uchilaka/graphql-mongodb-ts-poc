interface FriendInput {
    id?: string;
    email: string;
    firstName: string;
    lastName?: string;
    age: number,
    gender?: string;
    language?: string;
}

interface IEmail {
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
