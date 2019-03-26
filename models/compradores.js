'use strict';
module.exports = (sequelize, DataTypes) => {
    const Compradores = sequelize.define('Compradores', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" },
        comprador: { type: DataTypes.STRING, allowNull: false, field: "COMPRADOR" },
        ativo: { type: DataTypes.BOOLEAN, allowNull: false, field: "ATIVO" }
    }, {
            timestamps: true,
            createdAt: "CREATED_AT",
            updatedAt: 'UPDATE_AT',
            tableName: "LCM_COMPRADORES"
        });
    Compradores.associate = function (models) {
        models.Compradores.belongsTo(models.Users, {
            foreignKey: "USER_ID",
            targetKey: "id",
            allowNull: false
        });
    };

    return Compradores;
};