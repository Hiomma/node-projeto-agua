const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Posicao = require('../../types/posicao');
const PosicaoInput = require("../../inputs/posicao.js");

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
    resolve(source, args) {
        return models.Posicao
            .findByPk(args.id)
            .then((posicao) => {
                return posicao.update(args.posicao);
            });
    }
};
