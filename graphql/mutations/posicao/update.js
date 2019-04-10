const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Categoria = require('../../types/categoria');
const CategoriaInput = require("../../inputs/categoria.js");

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
    resolve(source, args) {
        return models.Categoria
            .findById(args.id)
            .then((categoria) => {
                return categoria.update(args.categoria);
            });
    }
};
