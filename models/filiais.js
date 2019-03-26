'use strict';
module.exports = (sequelize, DataTypes) => {
  const Filiais = sequelize.define('Filiais', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" },
    filial: { type: DataTypes.STRING, allowNull: false, field: "FILIAL" },
    ativo:{ type: DataTypes.BOOLEAN, allowNull: false, field: "ATIVO" }
  }, {
    timestamps: true,
    createdAt: "CREATED_AT",
    updatedAt: 'UPDATE_AT',
    tableName: "LCM_FILIAIS"
  });
  Filiais.associate = function(models) {
    // associations can be defined here
  };
  return Filiais;
};