const {
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const models = require('../../../models/index.js');
const Noticia = require('../../types/noticia.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Noticia,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Noticia
                .findByPk(args.id)
                .then((noticia) => {
                    return noticia.update({ ativado: false });
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
