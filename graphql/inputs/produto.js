const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'ProdutoInput',
    fields: () => ({
        nome: { type: GraphQLNonNull(GraphQLString) },
        texto: { type: GraphQLNonNull(GraphQLString) },
        imagem: { type: GraphQLNonNull(GraphQLString) },
        video: { type: GraphQLNonNull(GraphQLString) },
        ativado: { type: GraphQLNonNull(GraphQLBoolean) },
    })
});
