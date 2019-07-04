const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Video',
    description: 'Videos',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Video",
                resolve(video) {
                    return video.id;
                }
            },
            nome: {
                type: GraphQLString,
                description: "Nome do Video",
                resolve(video) {
                    return video.nome;
                }
            },
            url: {
                type: GraphQLString,
                description: "Link do Video",
                resolve(video) {
                    return video.url;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "Video está ativada?",
                resolve(video) {
                    return video.ativado;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Video",
                resolve(video) {
                    return video.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Video",
                resolve(video) {
                    return video.updatedAt;
                }
            },
        };
    }
});
