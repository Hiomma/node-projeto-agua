'use strict';
module.exports = (sequelize, DataTypes) => {
    const Empresa = sequelize.define('Empresa', {
        destaque: DataTypes.BOOLEAN,
        ativado: DataTypes.BOOLEAN,
        url: DataTypes.STRING
    }, {
            tableName: "empresas"
        });
    Empresa.associate = function (models) {
        // associations can be defined here
    };
    return Empresa;
};