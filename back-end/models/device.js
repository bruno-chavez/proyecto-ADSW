'use strict';

module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
      freezeTableName: true,
      tableName: 'Device'
  });
  Device.associate = function(models) {
    // associations can be defined here
  };
  return Device;
};