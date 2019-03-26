'use strict';
module.exports = (sequelize, DataTypes) => {
    const Permissoes = sequelize.define('Permissoes', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" },
        permissao: { type: DataTypes.STRING, allowNull: false, field: "PERMISSAO" },
        descricao: { type: DataTypes.STRING, allowNull: false, field: "DESCRICAO" }
    }, {
            timestamps: true,
            createdAt: "CREATED_AT",
            updatedAt: 'UPDATE_AT',
            tableName: "LCM_PERMISSOES"
        });
    Permissoes.associate = function (models) {

        models.Permissoes.belongsTo(models.Submodulos, {
            foreignKey: "SUBMODULO_ID",
            targetKey: "id",
            allowNull: false
        });
    };
    return Permissoes;
};