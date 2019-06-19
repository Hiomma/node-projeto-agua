const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const models = require('../../../models/index.js');
const Slide = require('../../types/slide.js');

module.exports = {
    type: Slide,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.Slide.findByPk(args.id);
    }
};
