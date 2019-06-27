const models = require('../../../models/index.js');
const Empresa = require('../../types/empresa.js');
const EmpresaInput = require('../../inputs/empresa.js');

const auth = require("../../../services/auth.graphql");

module.exports = {
    type: Empresa,
    args: {
        empresa: {
            type: EmpresaInput
        }
    },
    async resolve(source, args, { req }) {
        if (await auth(req)) {
            return models.Empresa.build({
                destaque: args.empresa.destaque,
                url: args.empresa.url,
                ativado: args.empresa.ativado
            }).save().then(function (newEmpresa) {
                return models.Empresa.findByPk(newEmpresa.id);
            });
        } else {
            throw new Error("Não foi aceito a sua requisição, por favor, logue novamente")
        }
    }
};
