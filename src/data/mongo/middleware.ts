import { NextFunction, Request, Response } from "express";
import graphQLHTTP from "express-graphql";
import { schema } from "./schema";

const route = [
  // Integrate middleware for authentication, etc.
  (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.originalUrl}`);
    return next();
  },
  // Handle GraphQL HTTP request(s)
  graphQLHTTP({
    // Ensures that the "Explorer" interface is available
    graphiql: true,
    schema
  })
];

// module.exports = route;

export default route;
