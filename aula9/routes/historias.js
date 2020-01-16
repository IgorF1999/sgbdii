var express = require("express"),
    router = express.Router(),
    pessoa = require("../models/pessoa.js"),
    mongoose = require("mongoose");

router.get("/", function (req, res) {
    historia.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function (req, res) {
    var id = req.parms.id;
    historia.findOne({ _id: id }).populate('pessoa').exec(function (err, data) {
        if (err) return res.send(err);
        res.send(data);
    });
});

router.post("/", function (req, res) {
    var onj = req.body;

    var objectHist = new historia();
    objectHist.titulo = obj.titulo;
    objectHist.pessoa = obj.pessoa_id;

    objectHist.save(function (err) {
        if (err) {
            res.send(err);
            return;
        }
        res.send("historia criada com sucesso");
    });
});