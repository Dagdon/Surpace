import express from "express";
import sequelize from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Route import
import authRoute from "./routes/auth.js";
import profileRoute from "./routes/profile.js";
import landingRoute from "./routes/landing.js";

// Models import
import User from "./models/user.js";
import Purchase from "./models/purchase.js"
import ResetToken from "./models/resetToken.js";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend")));


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

// Register route
app.use("/api", authRoute);
app.use("/api", profileRoute);
app.use("/", landingRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
