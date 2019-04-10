const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'NoticiaInput',
    fields: () => ({
        titulo: { type: GraphQLNonNull(GraphQLString) },
        manchete: { type: GraphQLNonNull(GraphQLString) },
        texto: { type: GraphQLNonNull(GraphQLString) },
        posicao_id: { type: GraphQLNonNull(GraphQLID) },
        imagem: { type: GraphQLNonNull(GraphQLString) },
        ativado: { type: GraphQLNonNull(GraphQLBoolean) },
        categoria_id: { type: GraphQLNonNull(GraphQLID) },
        url: { type: GraphQLNonNull(GraphQLString) }
    })
});
