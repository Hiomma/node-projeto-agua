const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Mensagem',
    description: 'Mensagens',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Mensagem",
                resolve(mensagem) {
                    return mensagem.id;
                }
            },
            nome: {
                type: GraphQLString,
                description: "Nome do Mensagem",
                resolve(mensagem) {
                    return mensagem.nome;
                }
            },
            titulo: {
                type: GraphQLString,
                description: "Titulo do Mensagem",
                resolve(mensagem) {
                    return mensagem.titulo;
                }
            },
            email: {
                type: GraphQLString,
                description: "E-mail do remetente do Mensagem",
                resolve(mensagem) {
                    return mensagem.email;
                }
            },
            mensagem: {
                type: GraphQLString,
                description: "Mensagem do Mensagem",
                resolve(mensagem) {
                    return mensagem.mensagem;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Mensagem",
                resolve(mensagem) {
                    return mensagem.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Mensagem",
                resolve(mensagem) {
                    return mensagem.updatedAt;
                }
            },
        };
    }
});
