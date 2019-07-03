const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Slide = require('../../types/slide');
const SlideInput = require("../../inputs/slide.js");

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Slide,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        slide: {
            type: new GraphQLNonNull(SlideInput)
        }
    },
    async resolve(source, args, {req}) {
        if (await auth(req)) {
            return models.Slide
                .findByPk(args.id)
                .then((slide) => {
                    return slide.update(args.slide);
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
