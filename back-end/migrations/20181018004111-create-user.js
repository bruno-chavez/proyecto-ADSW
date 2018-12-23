'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING,
            unique: true
        },
        password: {
          type: Sequelize.STRING
        },
        moderator: {
          type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        serial: {
          type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        approved: {
          type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        EquipmentId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Equipment',
                key: 'id'
            }},
        createdAt: {
          allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
            type: Sequelize.DATE
        }
    });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('User');
  }
};