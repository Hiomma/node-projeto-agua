'use strict';
module.exports = (sequelize, DataTypes) => {
    const Submodulos = sequelize.define('Submodulos', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" },
        submodulo: { type: DataTypes.STRING, allowNull: false, field: "SUBMODULO" }
    }, {
            timestamps: true,
            createdAt: "CREATED_AT",
            updatedAt: 'UPDATE_AT',
            tableName: "LCM_SUBMODULOS"
        });
    Submodulos.associate = function (models) {
        models.Submodulos.belongsTo(models.Modulos, {
            foreignKey: "MODULO_ID",
            targetKey: "id",
            allowNull: false
        });
    };
    return Submodulos;
};