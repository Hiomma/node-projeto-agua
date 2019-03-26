'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfis = sequelize.define('Perfis', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" },
    perfil: { type: DataTypes.STRING, allowNull: false, field: "PERFIL" },
    ativo: { type: DataTypes.BOOLEAN, allowNull: false, field: "ATIVO" }
  }, {
    timestamps: true,
    createdAt: "CREATED_AT",
    updatedAt: 'UPDATE_AT',
    tableName: "LCM_PERFIS"
  });
  Perfis.associate = function(models) {
    // associations can be defined here
  };
  return Perfis;
};