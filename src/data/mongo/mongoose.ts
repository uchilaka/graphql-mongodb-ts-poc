import mongoose from "mongoose";

// Mongo connection
const MONGODB_PORT = 27017;
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:${MONGODB_PORT}/friends`, {
    useMongoClient: true,
    user: 'root',
    pass: 'test',
});

export default mongoose;