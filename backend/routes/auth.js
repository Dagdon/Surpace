import express from "express";
import User from "../models/user.js";
import bcrypt, { hashSync } from "bcrypt";
import crypto from "crypto";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
// import { Router } from "express";
import nodemailer from "nodemailer";
import ResetToken from "../models/resetToken.js";

dotenv.config();
const router = express.Router();


const transporter =  nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});


// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne( { where: {email} });

//         if (!user) {
//             return res.status(400).send({ message: "Invalid email or password" });
//         }

//         // Compare the passwords
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(200).send({ message: "invalid email or password" });
//         }

//         return res.status(200).send({ message: "Login successful!" });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ message: "Internal Server Error" });
//     }
// });

// Login route to authenticate the user and send back a JWT token
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare the password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token if credentials are correct
        const payload = { userId: user.id, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            message: "Login successful",
            token,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


// Register route
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // Respond with a success message
        return res.status(201).json({ message: "Signup successful! Please Login." });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
});


router.post("/request-reset-password", async (req, res) => {
    const { email } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ where: { email }});

        if (!user) {
            return res.status(404).json( { message: "User not found" });
        }

        // Generate a secure reet token
        const token = crypto.randomBytes(32).toString("hex");
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes expiry

        await ResetToken.create({
            token,
            expiresAt,
            userId: user.id,
        });

        // Send the email
        const resetLink = `http://localhost:3000/reset-password?token=${token}`;
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Password Reset Request",
            text: `Click the link to reset your password: ${resetLink}`,
        });

        return res.status(200).json({ message: "Password reset link has been sent to your email." });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/reset-password", async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const resetToken = await ResetToken.findOne( { where: {token} });

        if (!resetToken) {
            return res.status(404).json( { message: "Invalid or Expired Token" });
        }

        if (resetToken.expiresAt < new Date()) {
            await resetToken.destroy();
            return res.status(400).json({ message: "Token has expired" })
        }

        // Find the user
        const user = await User.findByPk(resetToken.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        // Invalidate the token after use
        await resetToken.destroy();

        return res.status(200).json({ message: "Password has been reset successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


export default router;
