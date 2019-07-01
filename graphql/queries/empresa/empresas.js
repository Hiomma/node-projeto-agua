const {
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString
} = require('graphql');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('../../../models/index.js');
const Empresa = require('../../types/empresa.js');

module.exports = {
    type: new GraphQLList(Empresa),
    args: {
        filter: {
            type: GraphQLString,
            description: "Filtre pelas palavras chaves do conteúdo da tabela!"
        },
        ativado: {
            type: GraphQLBoolean,
            description: "Caso TRUE, retornará apenas os ativadaos, caso FALSE, retornará os não ativados, vazio retornará todos"
        },
        destaque: {
            type: GraphQLBoolean,
            description: "Caso TRUE, retornará apenas os destacados, caso FALSE, retornará os não destacados, vazio retornará todos"
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

            if (aux.destaque == true || aux.destaque == false) {
                args.destaque = aux.destaque;
            }
        }

        delete args.offset;
        delete args.filter;
        delete args.first;
        return models.Empresa.findAll({ where: args, offset, limit });
    }
};
