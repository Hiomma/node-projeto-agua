const models = require('../../../models/index.js');
const Categoria = require('../../types/categoria.js');
const CategoriaInput = require('../../inputs/categoria.js');

module.exports = {
    type: Categoria,
    args: {
        categoria: {
            type: CategoriaInput
        }
    },
    resolve(source, args) {
        return models.Categoria.build({
            nome: args.categoria.nome,
            ativado: args.categoria.ativado
        }).save().then(function (newCategoria) {
            return models.Categoria.findByPk(newCategoria.id);
        });
    }
};
