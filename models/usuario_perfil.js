'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsuarioPerfil = sequelize.define('UsuarioPerfil', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" }
  }, {
    timestamps: true,
      createdAt: "CREATED_AT",
      updatedAt: 'UPDATE_AT',
      tableName: "LCM_USUARIO_PERFIL"
    });
  UsuarioPerfil.associate = function (models) {
    models.UsuarioPerfil.belongsTo(models.Perfis, {
        foreignKey: "PERFIL_ID",
        targetKey: "id",
        allowNull: false
    });

    models.UsuarioPerfil.belongsTo(models.Users, {
        foreignKey: "USER_ID",
        targetKey: "id",
        allowNull: false
    });

  };
  return UsuarioPerfil;
};