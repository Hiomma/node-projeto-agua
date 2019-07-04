const {
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
} = require('graphql');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../../../models/index.js');
const Video = require('../../types/video.js');

module.exports = {
    type: new GraphQLList(Video),
    args: {
        filter: {
            type: GraphQLString,
            description: "Filtre pelas palavras chaves do conteúdo da tabela!"
        },
        ativado: {
            type: GraphQLBoolean,
            description: "Caso TRUE, retornará apenas os ativadaos, caso FALSE, retornará os não ativados, vazio retornará todos"
        },
        first: {
            type: GraphQLInt,
            description: 'Limita o retorno de itens. Padrão: 10',
        },
        offset: {
            type: GraphQLInt,
        },
    },
    resolve(root, args) {
        const offset = args.offset || 0;
        const limit = args.first || 10;

        if (args.filter) {
            let aux = args;

            args = {
                nome: {
                    [Op.like]: "%" + args.filter + "%"
                }
            }

            if (aux.ativado == true || aux.ativado == false) {
                args.ativado = aux.ativado;
            }
        }

        delete args.offset;
        delete args.filter;
        delete args.first;
        return models.Video.findAll({ where: args, offset, limit });
    }
};
