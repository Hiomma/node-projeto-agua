const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const Categoria = require('../../types/categoria.js');

module.exports = {
    type: Categoria,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.Categoria.findByPk(args.id);
    }
};
