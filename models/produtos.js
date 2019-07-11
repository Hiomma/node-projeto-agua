'use strict';
module.exports = (sequelize, DataTypes) => {
    const Produtos = sequelize.define('Produto', {
        nome: DataTypes.STRING,
        imagem: DataTypes.STRING,
        texto: DataTypes.TEXT,
        video: DataTypes.STRING,
        ativado: DataTypes.BOOLEAN
    }, { tableName: "produtos" });
    Produtos.associate = function (models) {
        // associations can be defined here
    };
    return Produtos;
};