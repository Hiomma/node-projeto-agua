const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'CategoriaInput',
    fields: () => ({
        nome: { type: GraphQLNonNull(GraphQLString) },
        ativado: { type: GraphQLNonNull(GraphQLBoolean) },
    })
});
