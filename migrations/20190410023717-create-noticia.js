'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Noticias', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            titulo: {
                type: Sequelize.STRING
            },
            manchete: {
                type: Sequelize.STRING
            },
            texto: {
                type: Sequelize.STRING
            },
            imagem: {
                type: Sequelize.STRING
            },
            url: {
                type: Sequelize.STRING
            },
            ativado: {
                type: Sequelize.BOOLEAN
            },
            categoria_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "categorias",
                    key: "id"
                }
            },
            posicao_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "posicoes",
                    key: "id"
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Noticias');
    }
};