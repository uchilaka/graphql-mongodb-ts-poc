import casual from "casual";
import _ from "lodash";
import path from "path";
import Sequelize from "sequelize";

const DEV_MODE = true;

// SQL
const sequelize = new Sequelize("database", "", "", {
  port: 3306,
  dialect: "sqlite",
  storage: path.join(
    __dirname,
    `${DEV_MODE ? "../../data" : "../data"}/sqlite3/app.sqlite3`
  )
});

export const Aliens = sequelize.define("aliens", {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planet: { type: Sequelize.STRING }
});

// Use { force: true } to force re-initialization of the DB
Aliens.sync({ force: false }).then(() => {
  _.times(5, (i) => {
    Aliens.create({
      firstName: casual._first_name(),
      lastName: casual._last_name(),
      planet: casual._word()
    });
  });
});

export { sqlite3Middleware } from "./middleware";
