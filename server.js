import express from "express";
import sequelize from "./db.js";
import cors from "cors";
import User from "./models/user.js";
import Profile from "./models/profile.js";
import Purchase from "./models/purchase.js";

const app = express();
const port = 3000;

app.use(cors());
// app.use(express.json()); // Middleware to parse JSON requests
// app.use(cookieParser()); // Middleware to parse cookies

// Sync database and authenticate connection
sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Sync the models with database
sequelize.sync({ force: false })
    .then(() => {
        console.log("Database and tables created successfully");
    })
    .catch(error => {
        console.error("Error syncing models with the database: ", error);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
