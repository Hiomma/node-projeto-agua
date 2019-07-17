const models = require('../../../models/index.js');
const Mensagem = require('../../types/mensagem.js');
const MensagemInput = require('../../inputs/mensagem.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Mensagem,
    args: {
        mensagem: {
            type: MensagemInput
        }
    },
    async resolve(source, args, { req }) {
            return models.Mensagem.build({
                nome: args.mensagem.nome,
                titulo: args.mensagem.titulo,
                mensagem: args.mensagem.mensagem,
                email: args.mensagem.email
            }).save().then(function (newMensagem) {
                return models.Mensagem.findByPk(newMensagem.id);
            });
    }
};
