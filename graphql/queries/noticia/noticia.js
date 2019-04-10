const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const Noticia = require('../../types/noticia.js');

module.exports = {
    type: Noticia,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.Noticia.findByPk(args.id);
    }
};
