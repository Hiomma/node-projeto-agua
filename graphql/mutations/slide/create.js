const models = require('../../../models/index.js');
const Slide = require('../../types/slide.js');
const SlideInput = require('../../inputs/slide.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Slide,
    args: {
        slide: {
            type: SlideInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Slide.build({
                nome: args.slide.nome,
                descricao: args.slide.descricao,
                subdescricao: args.slide.subdescricao,
                url: args.slide.url,
                ativado: args.slide.ativado
            }).save().then(function (newSlide) {
                return models.Slide.findByPk(newSlide.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
