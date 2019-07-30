const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const Parceiro = require('../../types/parceiro.js');

module.exports = {
    type: Parceiro,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.Parceiro.findByPk(args.id);
    }
};
