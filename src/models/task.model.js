const Sequelize = require('sequelize');
const db = require('../database/db');

const Task = db.define('task', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  due_date: {
    type: Sequelize.DATE
  },
  priority: {
    type: Sequelize.ENUM('Low', 'Medium', 'High'),
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('Pending', 'In Progress', 'Completed'),
    allowNull: false
  }
}, {
  // Options
  freezeTableName: true, // prevent Sequelize from pluralizing the table name
  timestamps: false // disable createdAt and updatedAt fields
});

module.exports = Task;