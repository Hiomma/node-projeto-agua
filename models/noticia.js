'use strict';
module.exports = (sequelize, DataTypes) => {
    const Noticia = sequelize.define('Noticia', {
        titulo: DataTypes.STRING,
        manchete: DataTypes.STRING,
        texto: DataTypes.STRING,
        imagem: DataTypes.STRING,
        url: DataTypes.STRING,
        ativado: DataTypes.BOOLEAN
    }, {
            tableName: "noticias"
        });
    Noticia.associate = function (models) {
        Noticia.belongsTo(models.Categoria, {
            foreignKey: "categoria_id"
        });
        Noticia.belongsTo(models.Posicao, {
            foreignKey: "posicao_id"
        });
    };
    return Noticia;
};