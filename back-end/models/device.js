'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Device.associate = function(models) {
    // associations can be defined here
  };
  return Device;
};