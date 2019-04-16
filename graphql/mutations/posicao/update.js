const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Posicao = require('../../types/posicao');
const PosicaoInput = require("../../inputs/posicao.js");

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Posicao,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        posicao: {
            type: new GraphQLNonNull(PosicaoInput)
        }
    },
    async resolve(source, args, {req}) {
        if (await auth(req)) {
            return models.Posicao
                .findByPk(args.id)
                .then((posicao) => {
                    return posicao.update(args.posicao);
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
