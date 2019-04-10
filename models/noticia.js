'use strict';
module.exports = (sequelize, DataTypes) => {
  const Noticia = sequelize.define('Noticia', {
    titulo: DataTypes.STRING,
    manchete: DataTypes.STRING,
    texto: DataTypes.STRING,
    imagem: DataTypes.STRING,
    url: DataTypes.STRING,
    ativado: DataTypes.BOOLEAN
  }, {});
  Noticia.associate = function(models) {
     Noticia.belongsTo(models.Categoria);
     Noticia.belongsTo(models.Posicao);
  };
  return Noticia;
};