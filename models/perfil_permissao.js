'use strict';
module.exports = (sequelize, DataTypes) => {
    const PerfilPermissao = sequelize.define('PerfilPermissao', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" }
    }, {
            timestamps: true,
            createdAt: "CREATED_AT",
            updatedAt: 'UPDATE_AT',
            tableName: "LCM_PERFIL_PERMISSAO"
        });
    PerfilPermissao.associate = function (models) {
        models.PerfilPermissao.belongsTo(models.Perfis, {
            foreignKey: "PERFIL_ID",
            targetKey: "id",
            allowNull: false
        });

        
        models.PerfilPermissao.belongsTo(models.Permissoes, {
            foreignKey: "PERMISSAO_ID",
            targetKey: "id",
            allowNull: false
        });

        models.PerfilPermissao.belongsTo(models.Filiais, {
            foreignKey: "FILIAL_ID",
            targetKey: "id",
            allowNull: false
        });

        models.PerfilPermissao.belongsTo(models.Secoes, {
            foreignKey: "SECAO_ID",
            targetKey: "id",
            allowNull: false
        });
    };
    return PerfilPermissao;
};