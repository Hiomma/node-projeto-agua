const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Posicao',
    description: 'Posição da Noticia na Página Inicial',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID da Posicao",
                resolve(categoria) {
                    return categoria.id;
                }
            },
            nome: {
                type: GraphQLString,
                description: "Nome da Posicao",
                resolve(categoria) {
                    return categoria.nome;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "Essa posicao está ativada?",
                resolve(categoria) {
                    return categoria.ativado;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação da Posicao",
                resolve(categoria) {
                    return categoria.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Posicao",
                resolve(categoria) {
                    return categoria.updatedAt;
                }
            },
        };
    }
});
