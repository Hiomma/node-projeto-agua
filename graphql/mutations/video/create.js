const models = require('../../../models/index.js');
const Video = require('../../types/video.js');
const VideoInput = require('../../inputs/video.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Video,
    args: {
        video: {
            type: VideoInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Video.build({
                nome: args.video.nome,
                url: args.video.url,
                ativado: args.video.ativado
            }).save().then(function (newVideo) {
                return models.Video.findByPk(newVideo.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
