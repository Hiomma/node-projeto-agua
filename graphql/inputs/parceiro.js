const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'ParceiroInput',
    fields: () => ({
        nome: { type: GraphQLNonNull(GraphQLString) },
        url: { type: GraphQLNonNull(GraphQLString) },
        ativado: { type: GraphQLNonNull(GraphQLBoolean) },
    })
});
