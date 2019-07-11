const models = require('../../../models/index.js');
const Produto = require('../../types/produto.js');
const ProdutoInput = require('../../inputs/produto.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Produto,
    args: {
        produto: {
            type: ProdutoInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Produto.build({
                titulo: args.produto.titulo,
                manchete: args.produto.manchete,
                texto: args.produto.texto,
                imagem: args.produto.imagem,
                ativado: args.produto.ativado,
                posicao_id: args.produto.posicao_id,
                categoria_id: args.produto.categoria_id,
                url: args.produto.url
            }).save().then(function (newProduto) {
                return models.Produto.findByPk(newProduto.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
