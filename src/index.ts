import express from "express";
import memMiddleware from "./data/mem/middleware";
import mongoMiddleware from "./data/mongo/middleware";

// create a new express application instance
const app: express.Application = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

app.use("/mongo/graphql", mongoMiddleware);
// app.use("/mem/graphql", memMiddleware);

app.use("/graphql", memMiddleware);

app.listen(PORT, () =>
  console.log(`Running server on port localhost:${PORT}/graphql`)
);
