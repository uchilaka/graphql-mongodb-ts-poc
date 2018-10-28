import mongoose from "mongoose";

// Mongo connection
const MONGODB_PORT = 27017;
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:${MONGODB_PORT}/friends`, {
    useMongoClient: true,
    user: 'root',
    pass: 'test',
});

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

export const Friends = mongoose.model('friends', friendSchema);