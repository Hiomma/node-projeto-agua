    const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Parceiro = require('../../types/parceiro');
const ParceiroInput = require("../../inputs/parceiro.js");

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Parceiro,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        parceiro: {
            type: new GraphQLNonNull(ParceiroInput)
        }
    },
    async resolve(source, args, {req}) {
        if (await auth(req)) {
            return models.Parceiro
                .findByPk(args.id)
                .then((parceiro) => {
                    return parceiro.update(args.parceiro);
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
