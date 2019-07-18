const {
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const models = require('../../../models/index.js');
const Mensagem = require('../../types/mensagem.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Mensagem,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(source, args, {req}) {
        if (await auth(req)) {
            return models.Mensagem
                .findByPk(args.id)
                .then((mensagem) => {
                    return mensagem.destroy();
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
