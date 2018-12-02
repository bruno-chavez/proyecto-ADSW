'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      moderator: DataTypes.BOOLEAN,
      serial: DataTypes.INTEGER,
      approved: DataTypes.BOOLEAN
  }, {
      freezeTableName: true,
      tableName: 'User'
  });
  User.associate = function(models) {
    // associations can be defined here
      User.belongsTo(sequelize.model('Equipment'));
  };
  return User;
};