const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

const { PosicaoInput } = require("../inputs/posicao");
const { CategoriaInput } = require("../inputs/categoria")

module.exports = new GraphQLInputObjectType({
    name: 'NoticiaInput',
    fields: () => ({
        titulo: { type: GraphQLNonNull(GraphQLString) },
        manchete: { type: GraphQLNonNull(GraphQLString) },
        texto: { type: GraphQLNonNull(GraphQLString) },
        posicao: { type: PosicaoInput },
        imagem: { type: GraphQLNonNull(GraphQLString) },
        ativado: { type: GraphQLNonNull(GraphQLBoolean) },
        categoria: { type: CategoriaInput },
        url: { type: GraphQLNonNull(GraphQLString) }
    })
});
