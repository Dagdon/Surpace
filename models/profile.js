import sequelize from '../db.js'; // Import Sequelize instance
import { DataTypes } from 'sequelize';

const Profile = sequelize.define('Profile', {
  photo: {
    type: DataTypes.STRING, // This stores the photo path or URL
    allowNull: true,
  },
});

export default Profile;