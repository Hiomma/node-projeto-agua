'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posicao = sequelize.define('Posicao', {
    nome: DataTypes.STRING,
    ativado: DataTypes.BOOLEAN
  }, {});
  Posicao.associate = function(models) {
    // associations can be defined here
  };
  return Posicao;
};