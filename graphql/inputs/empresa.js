const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'EmpresaInput',
    fields: () => ({
        url: { type: GraphQLNonNull(GraphQLString) },
        destaque: { type: GraphQLNonNull(GraphQLBoolean) },
        ativado: { type: GraphQLNonNull(GraphQLBoolean) },
    })
});
