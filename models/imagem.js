'use strict';
module.exports = (sequelize, DataTypes) => {
    const Imagem = sequelize.define('Imagem', {
        url: DataTypes.STRING
    }, {
        tableName: "imagens"
    });
    Imagem.associate = function (models) {
        Imagem.belongsTo(models.Noticia, {
            foreignKey: "noticia_id"
        });
    };
    return Imagem;
};