const express = require('express');
const models = require("../models")
const fs = require('fs');

var router = express.Router();


function imagemController() {

    router.route("/imagem/:id").post(uploadImagem);
    router.route("/imagem/principal/:id").post(uploadImagemPrincipalNoticia);
    router.route("/parceiro/imagem/:id").post(uploadParceiro);

    return router;


    /**
     * @description Upload das fotos da noticia
     */
    async function uploadImagem(req, res) {
        if (req.files.length > 0) {
            await models.Imagem.findAll({ raw: true, where: { noticia_id: req.params.id } }).then(data => {
                for (let aux of data) {
                    fs.unlink(aux.url, () => { })
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

    /**
     * @description Upload da foto principal da noticia
     */
    async function uploadImagemPrincipalNoticia(req, res) {
        if (req.files.length > 0) {
            await models.Noticia.findByPk(req.params.id).then(data => {
                fs.unlink(data.imagem, () => { })
            })

            for (let aux of req.files) {
                await models.Noticia
                    .findByPk(req.params.id)
                    .then((noticia) => {

                        noticia.imagem = aux.path.replace(/\\/g, "/");
                        return noticia.update({ imagem: noticia.imagem });
                    });
            }

            return res.send(req.files);
        }

        return res.status(500).send('Houve erro no upload!');
    }

    /**
    * @description Upload da foto da tabela da parceiro
    */
    async function uploadParceiro(req, res) {
        if (req.files.length > 0) {
            await models.Parceiro.findByPk(req.params.id).then(data => {
                if (data)
                    fs.unlink(data.url, () => { })
            })

            for (let aux of req.files) {
                await models.Parceiro
                    .findByPk(req.params.id)
                    .then((parceiro) => {

                        parceiro.url = aux.path.replace(/\\/g, "/");
                        return parceiro.update({ url: parceiro.url });
                    });
            }

            return res.send(req.files);
        }

        return res.status(500).send('Houve erro no upload!');
    }
}

module.exports = imagemController;