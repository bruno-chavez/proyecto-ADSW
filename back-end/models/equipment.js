'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('Equipment', {
    name: DataTypes.STRING,
    deviceID: DataTypes.INTEGER
  }, {
      freezeTableName: true,
      tableName: 'Equipment'
  });
  Equipment.associate = function(models) {
    // associations can be defined here
  };
  return Equipment;
};