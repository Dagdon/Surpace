import express from "express";
import User from "../models/user.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

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
