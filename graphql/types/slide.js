const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Slide',
    description: 'Slides',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Slide",
                resolve(slide) {
                    return slide.id;
                }
            },
            nome: {
                type: GraphQLString,
                description: "Nome do Slide",
                resolve(slide) {
                    return slide.nome;
                }
            },
            descricao: {
                type: GraphQLString,
                description: "Descrição do Slide",
                resolve(slide) {
                    return slide.descricao;
                }
            },
            subdescricao: {
                type: GraphQLString,
                description: "Subdescrição do Slide",
                resolve(slide) {
                    return slide.subdescricao;
                }
            },
            url: {
                type: GraphQLString,
                description: "Link do Slide",
                resolve(slide) {
                    return slide.url;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "Slide está ativada?",
                resolve(slide) {
                    return slide.ativado;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Slide",
                resolve(slide) {
                    return slide.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Slide",
                resolve(slide) {
                    return slide.updatedAt;
                }
            },
        };
    }
});
