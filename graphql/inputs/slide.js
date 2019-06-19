const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'PosicaoInput',
    fields: () => ({
        nome: { type: GraphQLNonNull(GraphQLString) },
        ativado: { type: GraphQLNonNull(GraphQLBoolean) },
    })
});
