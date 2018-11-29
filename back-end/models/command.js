'use strict';

module.exports = (sequelize, DataTypes) => {
  const Command = sequelize.define('Command', {
      value: DataTypes.INTEGER,
      unit: DataTypes.STRING,
      device:DataTypes.INTEGER,
      function: DataTypes.STRING
  }, {
      freezeTableName: true,
      tableName: 'Command'
  });
  Command.associate = function(models) {
    // associations can be defined here
  };
  return Command;
};