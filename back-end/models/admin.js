'use strict';

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
      freezeTableName: true,
      tableName: 'Admin'
  });
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};