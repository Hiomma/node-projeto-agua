const {
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const models = require('../../../models/index.js');
const Depoimento = require('../../types/depoimento.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Depoimento,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(source, args, {req}) {
        if (await auth(req)) {
            return models.Depoimento
                .findByPk(args.id)
                .then((depoimento) => {
                    return depoimento.update({ ativado: false });
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
