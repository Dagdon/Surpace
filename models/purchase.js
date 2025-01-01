import sequelize from '../db.js'; // Import Sequelize instance
import { DataTypes } from 'sequelize';

const Purchase = sequelize.define('Purchase', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Purchase;