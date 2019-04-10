const {
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const models = require('../../../models/index.js');
const Noticia = require('../../types/noticia.js');

module.exports = {
    type: Noticia,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(source, args) {
        return models.Noticia
            .findByPk(args.id)
            .then((noticia) => {
                return noticia.update({ ativado: false });
            });
    }
};
