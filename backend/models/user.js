import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    profilePhoto: {
        type: DataTypes.STRING, // This stores the photo path or URL
        allowNull: true,
      },

});

export default User;