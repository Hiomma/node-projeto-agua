const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Empresa',
    description: 'Empresas das Noticias',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Empresa",
                resolve(empresa) {
                    return empresa.id;
                }
            },
            url: {
                type: GraphQLString,
                description: "Url da Imagem",
                resolve(empresa) {
                    return empresa.url;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "Empresa está ativada?",
                resolve(empresa) {
                    return empresa.ativado;
                }
            },
            destaque: {
                type: GraphQLBoolean,
                description: "A imagem está em destaque?",
                resolve(empresa) {
                    return empresa.destaque;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Empresa",
                resolve(empresa) {
                    return empresa.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Empresa",
                resolve(empresa) {
                    return empresa.updatedAt;
                }
            },
        };
    }
});
