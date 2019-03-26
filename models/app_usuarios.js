'use strict';
module.exports = (sequelize, DataTypes) => {
    const AppUsuarios = sequelize.define('AppUsuarios', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" },
        apelido: { type: DataTypes.STRING(20), allowNull: false, field: "APELIDO" },
        nome: { type: DataTypes.STRING(60), allowNull: false, field: "NOME" },
        login: { type: DataTypes.STRING(30), allowNull: false, field: "LOGIN" },
        senha: { type: DataTypes.STRING(32), allowNull: false, field: "SENHA" },
        tipoLogin: { type: DataTypes.INTEGER, allowNull: true, field: "TIPO_LOGIN" },
        dtUltLogin: { type: DataTypes.DATE, allowNull: false, field: "DT_ULTLOGIN" },
        dtUBloqueio: { type: DataTypes.DATE, allowNull: false, field: "DT_UBLOQUEIO" },
        lgfailure: { type: DataTypes.INTEGER, allowNull: true, field: "LGFAILURE" },
        email: { type: DataTypes.STRING(200), allowNull: false, field: "EMAIL" },
        grupoId: { type: DataTypes.INTEGER, allowNull: true, field: "GRUPO_ID" },
        compradorId: { type: DataTypes.INTEGER, allowNull: false, field: "COMPRADOR_ID" },
        filialId: { type: DataTypes.INTEGER, allowNull: false, field: "FILIAL_ID" },
        dtCriacao: { type: DataTypes.DATE, allowNull: true, field: "DT_CRIACAO" },
        dtAlteracao: { type: DataTypes.DATE, allowNull: false, field: "DT_ALTERACAO" },
        dtExclusao: { type: DataTypes.DATE, allowNull: false, field: "DT_EXCLUSAO" },
        acessoExterno: { type: DataTypes.BOOLEAN, allowNull: true, field: "ACESSOEXTERNO", defaultValue: 0 }
    }, {
            tableName: "APP_USUARIOS"
        });
    AppUsuarios.associate = function (models) {
    };

    return AppUsuarios;
};