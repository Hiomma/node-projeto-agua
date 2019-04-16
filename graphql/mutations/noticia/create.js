const models = require('../../../models/index.js');
const Noticia = require('../../types/noticia.js');
const NoticiaInput = require('../../inputs/noticia.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Noticia,
    args: {
        noticia: {
            type: NoticiaInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Noticia.build({
                titulo: args.noticia.titulo,
                manchete: args.noticia.manchete,
                texto: args.noticia.texto,
                imagem: args.noticia.imagem,
                ativado: args.noticia.ativado,
                posicao_id: args.noticia.posicao_id,
                categoria_id: args.noticia.categoria_id,
                url: args.noticia.url
            }).save().then(function (newNoticia) {
                return models.Noticia.findByPk(newNoticia.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
