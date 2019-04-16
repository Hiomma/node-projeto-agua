const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Categoria = require('../../types/categoria');
const CategoriaInput = require("../../inputs/categoria.js");

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Categoria,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        categoria: {
            type: new GraphQLNonNull(CategoriaInput)
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Categoria
                .findByPk(args.id)
                .then((categoria) => {
                    return categoria.update(args.categoria);
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
