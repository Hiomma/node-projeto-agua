const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Parceiro',
    description: 'Parceiros',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Parceiro",
                resolve(parceiro) {
                    return parceiro.id;
                }
            },
            nome: {
                type: GraphQLString,
                description: "Nome do Parceiro",
                resolve(parceiro) {
                    return parceiro.nome;
                }
            },
            url: {
                type: GraphQLString,
                description: "Link da imagem do Parceiro",
                resolve(parceiro) {
                    return parceiro.url;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "Parceiro está ativada?",
                resolve(parceiro) {
                    return parceiro.ativado;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Parceiro",
                resolve(parceiro) {
                    return parceiro.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Parceiro",
                resolve(parceiro) {
                    return parceiro.updatedAt;
                }
            },
        };
    }
});
