const models = require('../../../models/index.js');
const Parceiro = require('../../types/parceiro.js');
const ParceiroInput = require('../../inputs/parceiro.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Parceiro,
    args: {
        parceiro: {
            type: ParceiroInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Parceiro.build({
                nome: args.parceiro.nome,
                url: args.parceiro.url,
                ativado: args.parceiro.ativado
            }).save().then(function (newParceiro) {
                return models.Parceiro.findByPk(newParceiro.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
