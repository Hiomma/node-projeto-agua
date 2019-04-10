const models = require('../../../models/index.js');
const Posicao = require('../../types/posicao.js');
const PosicaoInput = require('../../inputs/posicao.js');

module.exports = {
    type: Posicao,
    args: {
        posicao: {
            type: PosicaoInput
        }
    },
    resolve(source, args) {
        return models.Posicao.build({
            nome: args.posicao.nome,
            ativado: args.posicao.ativado
        }).save().then(function (newPosicao) {
            return models.Posicao.findByPk(newPosicao.id);
        });
    }
};
