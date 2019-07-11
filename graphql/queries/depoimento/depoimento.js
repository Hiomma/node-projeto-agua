const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const Depoimento = require('../../types/depoimento.js');

module.exports = {
    type: Depoimento,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.Depoimento.findByPk(args.id);
    }
};
