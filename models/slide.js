'use strict';
module.exports = (sequelize, DataTypes) => {
    const Slide = sequelize.define('Slide', {
        nome: DataTypes.STRING,
        ativado: DataTypes.BOOLEAN,
        url: DataTypes.STRING,
        subdescricao: DataTypes.STRING,
        descricao: DataTypes.STRING
    }, {
            tableName: "slides"
        });
    Slide.associate = function (models) {
        // associations can be defined here
    };
    return Slide;
};