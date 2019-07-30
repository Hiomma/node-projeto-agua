'use strict';
module.exports = (sequelize, DataTypes) => {
    const Parceiro = sequelize.define('Parceiro', {
        nome: DataTypes.STRING,
        ativado: DataTypes.BOOLEAN,
        url: DataTypes.STRING
    }, {
            tableName: "parceiros"
        });
    Parceiro.associate = function (models) {
        // associations can be defined here
    };
    return Parceiro;
};