import * as crypto from "crypto";
import express from "express";
import graphQLHTTP from "express-graphql";
import schema from "./schema";

// Import resolver(s)
// import { Samples, getFriend, createFriend } from './resolvers';

import * as resolvers from "./resolvers";

// create a new express application instance
const app: express.Application = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

// Define schema
const root = {
    ...resolvers
    // getFriend,
    // createFriend,
    // samples: Samples
};

app.use(
    "/graphql",
    graphQLHTTP({
        graphiql: true,
        rootValue: root,
        schema
    })
);

app.listen(PORT, () => console.log(`Running server on port localhost:${PORT}/graphql`));
