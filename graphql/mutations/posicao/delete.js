const {
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const models = require('../../../models/index.js');
const Posicao = require('../../types/posicao.js');

module.exports = {
    type: Posicao,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(source, args) {
        return models.Posicao
            .findByPk(args.id)
            .then((posicao) => {
                return posicao.update({ ativado: false });
            });
    }
};
