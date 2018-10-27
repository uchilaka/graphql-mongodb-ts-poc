import express from "express";
import graphQLHTTP from "express-graphql";
import schema from "./schema";

// create a new express application instance
const app: express.Application = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const root = {
  friend: () => {
    return {
      id: 28718992,
      firstName: "Manny",
      lastName: "Henri",
      gender: "Male",
      language: "English",
      email: "me@me.com"
    };
  }
};

app.use(
  "/graphql",
  graphQLHTTP({
    graphiql: true,
    rootValue: root,
    schema
  })
);

app.listen(PORT, () =>
  console.log(`Running server on port localhost:${PORT}/graphql`)
);
