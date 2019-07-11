    const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Depoimento = require('../../types/depoimento');
const DepoimentoInput = require("../../inputs/depoimento.js");

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Depoimento,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        depoimento: {
            type: new GraphQLNonNull(DepoimentoInput)
        }
    },
    async resolve(source, args, {req}) {
        if (await auth(req)) {
            return models.Depoimento
                .findByPk(args.id)
                .then((depoimento) => {
                    return depoimento.update(args.depoimento);
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
