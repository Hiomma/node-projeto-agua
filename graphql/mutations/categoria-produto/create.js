const models = require('../../../models/index.js');
const CategoriaProduto = require('../../types/categoria-produto.js');
const CategoriaProdutoInput = require('../../inputs/categoria-produto.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: CategoriaProduto,
    args: {
        categoria: {
            type: CategoriaProdutoInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.CategoriaProduto.build({
                nome: args.categoria.nome,
                ativado: args.categoria.ativado
            }).save().then(function (newCategoriaProduto) {
                return models.CategoriaProduto.findByPk(newCategoriaProduto.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
