const express = require('express');
const models = require("../models")
const fs = require('fs');

var router = express.Router();


function imagemController() {

    router.route("/imagem/:id").post(uploadImagem);
    router.route("/slide/imagem/:id").post(uploadSlideImagem);

    return router;

    async function uploadImagem(req, res) {
        if (req.files.length > 0) {
            await models.Imagem.findAll({ raw: true, where: { noticia_id: req.params.id } }).then(data => {
                for(let aux of data){
                    fs.unlink(aux.url, () => {})
                }
            })

            await models.Imagem.destroy({ where: { noticia_id: req.params.id } });

            for (let aux of req.files) {
                await models.Imagem.build({
                    url: aux.path.replace(/\\/g, "/"),
                    noticia_id: req.params.id
                }).save();
            }

            return res.send(req.files);
        }



        return res.status(500).send('Houve erro no upload!');
    }
    ASDKJASKLDJLAKSDJ TO TERMINANDO A IMAGEM DO SLIDE

    async function uploadSlideImagem(req, res) {
        if (req.files.length > 0) {
            await models.Slide.findAll({ raw: true, where: { noticia_id: req.params.id } }).then(data => {
                for(let aux of data){
                    fs.unlink(aux.url, () => {})
                }
            })

            await models.Slide.destroy({ where: { noticia_id: req.params.id } });

            for (let aux of req.files) {
                await models.Imagem.build({
                    url: aux.path.replace(/\\/g, "/"),
                    noticia_id: req.params.id
                }).save();
            }

            return res.send(req.files);
        }



        return res.status(500).send('Houve erro no upload!');
    }
}

module.exports = imagemController;