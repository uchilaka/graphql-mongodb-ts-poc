import { NextFunction, Request, Response } from "express";
import graphQLHTTP from "express-graphql";
import { schema } from "./schema";

const route = [
  (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  },
  graphQLHTTP({
    graphiql: true,
    schema
  })
];

module.exports = route;

export default route;
