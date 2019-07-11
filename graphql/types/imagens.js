const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = require('graphql');


module.exports = new GraphQLObjectType({
    name: 'Imagem',
    description: 'Imagems da Página Inicial',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Imagem",
                resolve(imagem) {
                    return imagem.id;
                }
            },
            url: {
                type: GraphQLString,
                description: "Titulo da Imagem",
                resolve(imagem) {
                    return imagem.url;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Imagem",
                resolve(imagem) {
                    return imagem.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Imagem",
                resolve(imagem) {
                    return imagem.updatedAt;
                }
            },
        };
    }
});
