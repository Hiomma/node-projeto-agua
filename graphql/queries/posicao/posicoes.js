const {
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
} = require('graphql');

const models = require('../../../models/index.js');
const Posicao = require('../../types/posicao.js');

module.exports = {
    type: new GraphQLList(Posicao),
    args: {
        deletado: {
            type: GraphQLBoolean,
            description: "Caso TRUE, retornará apenas os deletados, caso FALSE, retornará os não deletados, vazio retornará todos"
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
        return models.Posicao.findAll({ where: args, offset, limit });
    }
};
