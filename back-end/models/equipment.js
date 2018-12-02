'use strict';

let {User} = require('./user');

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
      Equipment.hasMany(sequelize.model('User'), {as: 'Users'})
  };
  return Equipment;
};