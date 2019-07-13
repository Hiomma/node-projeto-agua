'use strict';
module.exports = (sequelize, DataTypes) => {
    const CategoriaProduto = sequelize.define('CategoriaProduto', {
        nome: DataTypes.STRING,
        ativado: DataTypes.BOOLEAN
    }, {
            tableName: "categorias-produto"
        });
    CategoriaProduto.associate = function (models) {
        // associations can be defined here
    };
    return CategoriaProduto;
};