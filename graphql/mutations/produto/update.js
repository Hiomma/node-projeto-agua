const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Produto = require('../../types/produto');
const ProdutoInput = require("../../inputs/produto.js");

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Produto,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        produto: {
            type: new GraphQLNonNull(ProdutoInput)
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Produto
                .findByPk(args.id)
                .then((produto) => {
                    return produto.update(args.produto);
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
