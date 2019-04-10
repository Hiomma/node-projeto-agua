const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt
} = require('graphql');

const { Posicao } = require("../types/posicao");
const { Categoria } = require("../types/categoria")

module.exports = new GraphQLObjectType({
    name: 'Noticia',
    description: 'Noticias da Página Inicial',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: "ID do Noticia",
                resolve(noticia) {
                    return noticia.id;
                }
            },
            titulo: {
                type: GraphQLString,
                description: "Titulo da Noticia",
                resolve(noticia) {
                    return noticia.titulo;
                }
            },
            manchete: {
                type: GraphQLString,
                description: "Manchete da Noticia",
                resolve(noticia) {
                    return noticia.manchete;
                }
            },
            texto: {
                type: GraphQLString,
                description: "Texto/corpo da Noticia",
                resolve(noticia) {
                    return noticia.texto;
                }
            },
            posicao: {
                type: Posicao,
                description: "Posição da Noticia na página inicial",
                resolve(noticia) {
                    return noticia.posicao;
                }
            },
            imagem: {
                type: GraphQLString,
                description: "URL da Imagem no servidor",
                resolve(noticia) {
                    return noticia.imagem;
                }
            },
            ativado: {
                type: GraphQLBoolean,
                description: "A noticia está ativada?",
                resolve(noticia) {
                    return noticia.ativado;
                }
            },
            categoria: {
                type: Categoria,
                description: "Categoria da Noticia",
                resolve(noticia) {
                    return noticia.categoria;
                }
            },
            url: {
                type: GraphQLString,
                description: "URL Amigável da Noticia",
                resolve(noticia) {
                    return noticia.url;
                }
            },
            createdAt: {
                type: GraphQLString,
                description: "Data de criação do Noticia",
                resolve(noticia) {
                    return noticia.createdAt;
                }
            },
            updatedAt: {
                type: GraphQLString,
                description: "Data da ultima atualização do Noticia",
                resolve(noticia) {
                    return noticia.updatedAt;
                }
            },
        };
    }
});
