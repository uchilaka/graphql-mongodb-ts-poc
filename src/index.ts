import express from "express";
import graphQLHTTP from "express-graphql";
import { schema } from "./data/schema";
import { initSchema, initMemSchema } from "./utils";

// create a new express application instance
const app: express.Application = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

app.use(
    "/mem/graphql",
    initMemSchema()
);

app.use(
    "/graphql",
    initSchema()
);

app.listen(PORT, () => console.log(`Running server on port localhost:${PORT}/graphql`));
