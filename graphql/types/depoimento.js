const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Depoimento',
    description: 'Depoimentos',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Depoimento",
                resolve(depoimento) {
                    return depoimento.id;
                }
            },
            nome: {
                type: GraphQLString,
                description: "Nome do Depoimento",
                resolve(depoimento) {
                    return depoimento.nome;
                }
            },
            descricao: {
                type: GraphQLString,
                description: "Descrição do Depoimento",
                resolve(depoimento) {
                    return depoimento.descricao;
                }
            },
            depoimento: {
                type: GraphQLString,
                description: "Depoimento do Depoimento",
                resolve(depoimento) {
                    return depoimento.depoimento;
                }
            },
            url: {
                type: GraphQLString,
                description: "Link da imagem do Depoimento",
                resolve(depoimento) {
                    return depoimento.url;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "Depoimento está ativada?",
                resolve(depoimento) {
                    return depoimento.ativado;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Depoimento",
                resolve(depoimento) {
                    return depoimento.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Depoimento",
                resolve(depoimento) {
                    return depoimento.updatedAt;
                }
            },
        };
    }
});
