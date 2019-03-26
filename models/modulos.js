'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modulos = sequelize.define('Modulos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID"},
    modulo:{ type: DataTypes.STRING, allowNull: false, field: "MODULO" }
  }, {
    timestamps: true,
    createdAt: "CREATED_AT",
    updatedAt: 'UPDATE_AT',
    tableName: "LCM_MODULOS"
  });
  Modulos.associate = function(models) {
    // associations can be defined here
  };
  return Modulos;
};