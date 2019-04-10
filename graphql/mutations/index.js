const createNoticia = require("./noticia/create")
const deleteNoticia = require("./noticia/delete")
const updateNoticia = require("./noticia/update")
const createPosicao = require("./posicao/create")
const deletePosicao = require("./posicao/delete")
const updatePosicao = require("./posicao/update")
const createCategoria = require("./categoria/create")
const deleteCategoria = require("./categoria/delete")
const updateCategoria = require("./categoria/update")

module.exports = {
    createNoticia,
    deleteNoticia,
    updateNoticia,
    createPosicao,
    deletePosicao,
    updatePosicao,
    createCategoria,
    deleteCategoria,
    updateCategoria,
};
