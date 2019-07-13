const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const CategoriaProduto = require('../../types/categoria-produto.js');

module.exports = {
    type: CategoriaProduto,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.CategoriaProduto.findByPk(args.id);
    }
};
