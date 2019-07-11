const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLInt
} = require('graphql');

const Posicao = require("../types/posicao");
const Categoria = require("../types/categoria")
const Imagens = require("../types/imagens");

const models = require("../../models");

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
                    return models.Posicao.findByPk(noticia.posicao_id);
                }
            },
            imagem: {
                type: GraphQLString,
                description: "URL da Imagem no servidor",
                resolve(noticia) {
                    return noticia.imagem;
                }
            },
            imagens: {
                type: new GraphQLList(Imagens),
                description: "Objeto de Imagens das Noticias",
                async resolve(noticia) {
                    return models.Imagem.findAll({ where: { noticia_id: noticia.id } });
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
                    return models.Categoria.findByPk(noticia.categoria_id);
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
