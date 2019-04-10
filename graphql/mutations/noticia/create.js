const models = require('../../../models/index.js');
const Noticia = require('../../types/noticia.js');
const NoticiaInput = require('../../inputs/noticia.js');

module.exports = {
    type: Noticia,
    args: {
        noticia: {
            type: NoticiaInput
        }
    },
    resolve(source, args) {
        return models.Noticia.build({
            titulo: args.noticia.titulo,
            manchete: args.noticia.manchete,
            texto: args.noticia.texto,
            posicao: args.noticia.posicao,
            imagem: args.noticia.imagem,
            ativado: args.noticia.ativado,
            categoria: args.noticia.categoria,
            url: args.noticia.url
        }).save().then(function (newNoticia) {
            return models.Noticia.findByPk(newNoticia.id);
        });
    }
};
