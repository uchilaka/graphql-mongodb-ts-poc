import express from "express";
import memMiddleware from "./data/mem/middleware";
import { mongoDbMiddleware } from "./data/mongo";
import { sqlite3Middleware } from "./data/sqlite3";

// create a new express application instance
const app: express.Application = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

app.use("/sqlite3/graphql", sqlite3Middleware);

app.use("/mongo/graphql", mongoDbMiddleware);
// app.use("/mem/graphql", memMiddleware);

app.use("/graphql", memMiddleware);

app.listen(PORT, () =>
  console.log(`Running server on port localhost:${PORT}/graphql`)
);
