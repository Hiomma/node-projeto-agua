const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const Posicao = require('../../types/posicao.js');

module.exports = {
    type: Posicao,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.Posicao.findByPk(args.id);
    }
};
