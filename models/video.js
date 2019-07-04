'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    nome: DataTypes.STRING,
    ativado: DataTypes.BOOLEAN,
    url: DataTypes.STRING
  }, {
    tableName: "videos"
});
  Video.associate = function(models) {
    // associations can be defined here
  };
  return Video;
};