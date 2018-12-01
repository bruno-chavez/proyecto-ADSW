'use strict';

module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('Equipment', {
      name: DataTypes.STRING,
      moderatorID: DataTypes.INTEGER,
      owner: DataTypes.INTEGER,
  }, {
      freezeTableName: true,
      tableName: 'Equipment'
  });
  Equipment.associate = function(models) {
    // associations can be defined here
  };
  return Equipment;
};