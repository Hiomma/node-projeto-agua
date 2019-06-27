const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const models = require('../../../models/index.js');
const Empresa = require('../../types/empresa');
const EmpresaInput = require("../../inputs/empresa.js");

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Empresa,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        empresa: {
            type: new GraphQLNonNull(EmpresaInput)
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Empresa
                .findByPk(args.id)
                .then((empresa) => {
                    return empresa.update(args.empresa);
                });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
