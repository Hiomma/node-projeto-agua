'use strict';
module.exports = (sequelize, DataTypes) => {
    const Mensagem = sequelize.define('Mensagem', {
        nome: DataTypes.STRING,
        titulo: DataTypes.STRING,
        email: DataTypes.STRING,
        mensagem: DataTypes.STRING
    }, {
            tableName: "mensagens"
        });
    Mensagem.associate = function (models) {
        // associations can be defined here
    };
    return Mensagem;
};