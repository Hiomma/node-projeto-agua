const {
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const models = require('../../../models/index.js');
const CategoriaProduto = require('../../types/categoria-produto.js');


const auth = require("../../../services/auth.graphql");

module.exports = {
    type: CategoriaProduto,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.CategoriaProduto
                .findByPk(args.id)
                .then((categoria) => {
                    return categoria.update({ ativado: false });
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
