var express = require("express"),
    router = express.Router(),
    pessoa = require("../models/pessoa.js"),
    mongoose = require("mongoose");

router.get("/", function (req, res) {
    pessoa.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    })
});

router.post("/", function (req, res) {
    var obj = req.body;
    var model = new pessoa(obj);
    model.save(function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("created");
    })
});

router.get("/:id", function (req, res) {
    var id = req.params.id;
    pessoa.find({ _id: id }), function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    };
});

router.get("/:id", function (req, res) {
    var id = req.params.id;
    pessoa.findById(id, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;
    pessoa.findByIdAndUpdate(id, { nome: obj.nome, apelido: obj.apelido, numtelemovel: obj.numtelemovel, data_de_nascimento: obj.data_de_nascimento},
        function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
});

router.post("/setMorada/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;
    pessoa.find({ _id: id }, function (err, data) {
    var morada = {
        _id: new mongoose.Types.ObjectId(),
        endereco: obj.endereco,
        cod_postal: obj.cod_postal
    };
    if (err) {
        res.send("error");
        return;
    }

    data[0].morada = morada;
    data[0].save(function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});
});

router.post("/setClube/:id", function (req,res) {
    var id = req.params.id;
    var obj = req.body;
    pessoa.findOne({ _id:id }, function (err, data) {
        var clubeObject = {
            nome: obj.nome,
            cor: obj.cor
        };
        if (err) {
            res.send("error");
            return;
        }
        data.clubes.addtoSet(clubeObject);
        data.save(function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send(data);
        });
    });
});


module.exports = router;