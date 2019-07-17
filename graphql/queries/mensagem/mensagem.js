const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const Mensagem = require('../../types/mensagem.js');

module.exports = {
    type: Mensagem,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.Mensagem.findByPk(args.id);
    }
};
