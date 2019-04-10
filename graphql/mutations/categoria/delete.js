const {
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const models = require('../../../models/index.js');
const Categoria = require('../../types/categoria.js');

module.exports = {
    type: Categoria,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(source, args) {
        return models.Categoria
            .findById(args.id)
            .then((categoria) => {
                return categoria.update({ deletado: true });
            });
    }
};
