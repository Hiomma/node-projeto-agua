'use strict';
module.exports = (sequelize, DataTypes) => {
    const Imagem = sequelize.define('ImagemProduto', {
        url: DataTypes.STRING
    }, {
            tableName: "imagens-produto"
        });
    Imagem.associate = function (models) {
        Imagem.belongsTo(models.Produto, {
            foreignKey: "produto_id"
        });
    };
    return Imagem;
};