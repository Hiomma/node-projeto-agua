const {
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
} = require('graphql');

const models = require('../../../models/index.js');
const Noticia = require('../../types/noticia.js');

module.exports = {
    type: new GraphQLList(Noticia),
    args: {
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
        delete args.offset;
        delete args.first;
        return models.Noticia.findAll({ where: args, offset, limit });
    }
};
