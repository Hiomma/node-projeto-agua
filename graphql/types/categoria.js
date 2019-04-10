const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Categoria',
    description: 'Categorias das Noticias',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Categoria",
                resolve(categoria) {
                    return categoria.id;
                }
            },
            nome: {
                type: GraphQLString,
                description: "Nome do Categoria",
                resolve(categoria) {
                    return categoria.nome;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "Categoria está ativada?",
                resolve(categoria) {
                    return categoria.ativado;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Categoria",
                resolve(categoria) {
                    return categoria.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Categoria",
                resolve(categoria) {
                    return categoria.updatedAt;
                }
            },
        };
    }
});
