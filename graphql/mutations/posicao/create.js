const models = require('../../../models/index.js');
const Posicao = require('../../types/posicao.js');
const PosicaoInput = require('../../inputs/posicao.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Posicao,
    args: {
        posicao: {
            type: PosicaoInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Posicao.build({
                nome: args.posicao.nome,
                ativado: args.posicao.ativado
            }).save().then(function (newPosicao) {
                return models.Posicao.findByPk(newPosicao.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
