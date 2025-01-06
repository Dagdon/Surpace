// models/resetToken.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const ResetToken = sequelize.define("ResetToken", {
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Users", // Table name
            key: "id",
        },
        onDelete: "CASCADE",
    },
}, {
    timestamps: true,
});

export default ResetToken;