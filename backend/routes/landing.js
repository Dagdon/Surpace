import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "landing.html"));
  });

router.get("/courses", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "courses.html"));
});

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "about-us.html"));
});

  export default router;