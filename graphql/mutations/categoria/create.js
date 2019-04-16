const models = require('../../../models/index.js');
const Categoria = require('../../types/categoria.js');
const CategoriaInput = require('../../inputs/categoria.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Categoria,
    args: {
        categoria: {
            type: CategoriaInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Categoria.build({
                nome: args.categoria.nome,
                ativado: args.categoria.ativado
            }).save().then(function (newCategoria) {
                return models.Categoria.findByPk(newCategoria.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
