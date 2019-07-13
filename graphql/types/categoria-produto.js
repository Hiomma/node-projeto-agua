const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'CategoriaProduto',
    description: 'CategoriaProdutos das Noticias',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do CategoriaProduto",
                resolve(categoria) {
                    return categoria.id;
                }
            },
            nome: {
                type: GraphQLString,
                description: "Nome do CategoriaProduto",
                resolve(categoria) {
                    return categoria.nome;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "CategoriaProduto está ativada?",
                resolve(categoria) {
                    return categoria.ativado;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do CategoriaProduto",
                resolve(categoria) {
                    return categoria.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do CategoriaProduto",
                resolve(categoria) {
                    return categoria.updatedAt;
                }
            },
        };
    }
});
