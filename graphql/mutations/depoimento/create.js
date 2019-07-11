const models = require('../../../models/index.js');
const Depoimento = require('../../types/depoimento.js');
const DepoimentoInput = require('../../inputs/depoimento.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Depoimento,
    args: {
        depoimento: {
            type: DepoimentoInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Depoimento.build({
                nome: args.depoimento.nome,
                descricao: args.depoimento.descricao,
                depoimento: args.depoimento.depoimento,
                url: args.depoimento.url,
                ativado: args.depoimento.ativado
            }).save().then(function (newDepoimento) {
                return models.Depoimento.findByPk(newDepoimento.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
