# A GraphQL Primer - With TypeScript

I wrote this project following along on the course **GraphQL Essentials Training** by [Emmanuel Henri](https://www.lynda.com/Emmanuel-Henri/6037653-1.html), while figuring out the tweaks needed to write it all in TypeScript instead.

## The Course

To follow along with the same course material, check out
[GraphQL Essentials Training](https://www.lynda.com/GraphQL-tutorials/GraphQL-Essential-Training/614315-2.html) on lynda.com.

## The Pattern

A few notes on the design patterns of the project (heavily inspired by that of the course instructor).

- **Resolvers** are helper functions that handle GraphQL queries and _resolve_ them into precise responses.
- **Models** are the classes, interfaces, enums etc. The structure that enables the creation and management of type-checked, apt data objects.
