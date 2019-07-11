const {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');

const models = require('../../../models/index.js');
const Produto = require('../../types/produto.js');

module.exports = {
    type: Produto,
    args: {
        id: {
            type: GraphQLID
        },
        url: {
            type: GraphQLString
        }
    },
    resolve(root, args) {
        if (args.url) {
            return models.Produto.findOne({ where: { url: args.url } })
        } else if (args.id) {
            return models.Produto.findByPk(args.id);
        } else {
            return null
        }
    }
};
