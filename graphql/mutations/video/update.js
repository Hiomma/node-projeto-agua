const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Video = require('../../types/video');
const VideoInput = require("../../inputs/video.js");

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Video,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        video: {
            type: new GraphQLNonNull(VideoInput)
        }
    },
    async resolve(source, args, {req}) {
        if (await auth(req)) {
            return models.Video
                .findByPk(args.id)
                .then((video) => {
                    return video.update(args.video);
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
