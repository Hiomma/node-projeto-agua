const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const Empresa = require('../../types/empresa.js');

module.exports = {
    type: Empresa,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.Empresa.findByPk(args.id);
    }
};
