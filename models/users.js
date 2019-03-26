'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: "ID" },
    login: { type: DataTypes.STRING, field: "LOGIN", allowNull: false },
    nome: { type: DataTypes.STRING, field: "NOME", allowNull: false },
    email: { type: DataTypes.STRING, field: "EMAIL", allowNull: false },
    password: { type: DataTypes.STRING, field: "PASSWORD", allowNull: false },
    tipo_login: { type: DataTypes.INTEGER, field: "TIPO_LOGIN", allowNull: false },
    acesso_externo: { type: DataTypes.BOOLEAN, field: "ACESSO_EXTERNO", allowNull: false },
    ativo: { type: DataTypes.BOOLEAN, field: "ATIVO", allowNull: false }
  }, {
      timestamps: true,
      createdAt: "CREATED_AT",
      updatedAt: 'UPDATE_AT',
      tableName: "LCM_USERS"
    });
  Users.associate = function (models) {
    // associations can be defined here
  };

  return Users;
};