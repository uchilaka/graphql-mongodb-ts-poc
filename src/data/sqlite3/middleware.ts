import { NextFunction, Request, Response } from "express";
import graphQLHTTP from "express-graphql";
import { Aliens } from ".";

const route = [
  (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  }
];

module.exports = route;

export const sqlite3Middleware = route;

export default route;
