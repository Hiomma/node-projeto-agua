'use strict';
module.exports = (sequelize, DataTypes) => {
    const Depoimento = sequelize.define('Depoimento', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        depoimento: DataTypes.STRING,
        ativado: DataTypes.BOOLEAN,
        url: DataTypes.STRING
    }, {
            tableName: "depoimentos"
        });
    Depoimento.associate = function (models) {
        // associations can be defined here
    };
    return Depoimento;
};