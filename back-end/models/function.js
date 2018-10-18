'use strict';
module.exports = (sequelize, DataTypes) => {
  const Function = sequelize.define('Function', {
    value: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  Function.associate = function(models) {
    // associations can be defined here
  };
  return Function;
};