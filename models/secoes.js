'use strict';
module.exports = (sequelize, DataTypes) => {
  const Secoes = sequelize.define('Secoes', {
    id:  { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" },
    secao: { type: DataTypes.STRING, allowNull: false, field: "SECAO" },
    ativo: { type: DataTypes.BOOLEAN, allowNull: false, field: "ATIVO" }
  }, {
    timestamps: true,
    createdAt: "CREATED_AT",
    updatedAt: 'UPDATE_AT',
    tableName: "LCM_SECOES"
  });
  Secoes.associate = function(models) {
    // associations can be defined here
  };
  return Secoes;
};