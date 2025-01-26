import express from "express";
import User from "../models/user.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "profile.html"));
});

router.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "profile.html"));
});

router.get("/messages", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "messages.html"));
});

router.get("/notifications", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "notifications.html"));
});

router.get("/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "settings.html"));
});



router.put("/edit-profile", authMiddleware, async (req, res) => {
    const { name, email, profilePictureUrl } = req.body;

    try {
        const user = await User.findByPk(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (name) user.name = name;
        if (email) user.email = email;
        if (profilePictureUrl) user.profilePictureUrl = profilePictureUrl;

        await user.save();

        return res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
