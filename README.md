# A GraphQL Primer - With TypeScript

I'm writing this project following along on the course **GraphQL Essentials Training** by [Emmanuel Henri](https://www.lynda.com/Emmanuel-Henri/6037653-1.html), while figuring out the tweaks needed to write it all in TypeScript instead.

## The Course

To follow along with the same course material, check out
[GraphQL Essentials Training](https://www.lynda.com/GraphQL-tutorials/GraphQL-Essential-Training/614315-2.html) on lynda.com.

## The Pattern

A few notes on the design patterns of the project (heavily inspired by that of the course instructor).

- **Resolvers** are helper functions that handle GraphQL queries and _resolve_ them into precise responses.
- **Models** are the classes, interfaces, enums etc. The structure that enables the creation and management of type-checked, apt data objects.
- **Middleware** are functionality "hooks" i.e. when you are ready to start implementing stuff like authentication into the workflow for any one of your "resolvers", a middleware is the (ExpressJS) pattern that supports that kind of enhancement.
- **Schema** in our project references all the _stuff_ we need to define to map our (universal) data model to a specific data store. This is where it all comes together - resolvers to do the acutal work for each GraphQL "endpoint" request, interfaces in TypeScript to ensure typechecking keeps us out of trouble, and middleware to expose, secure and support (micro)service APIs for each of the resolvers we have defined in our GraphQL typedefs.

<!-- Emoji: https://emojipedia.org/man-bowing-deeply-type-5/ -->

## The Stack (G.A.M.E.)

When I'm done with my training, and start leveraging these new skills in my future projects, I'll be doing it with the **G**raphQL // **A**ngular // **M**ongoDB // **E**xpressJS (// **D**ocker) stack (The "D" is silent) 🤘🏾🙇🏾‍♂️.

### SQLite3

Many thanks to [Jordi Ferber Jordà](https://twitter.com/jordifebrer) for his super-useful notes on [running SQLite3 in Docker](https://devopsheaven.com/sqlite/backup/restore/dump/databases/docker/2017/10/10/sqlite-backup-restore-docker.html)
