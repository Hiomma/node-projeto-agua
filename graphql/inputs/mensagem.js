const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'MensagemInput',
    fields: () => ({
        nome: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        titulo: { type: GraphQLNonNull(GraphQLString) },
        mensagem: { type: GraphQLNonNull(GraphQLString) },
    })
});
