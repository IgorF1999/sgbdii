var express = require("express"),
    router = express.Router(),
    jogadores = require("../models/jogadores");

router.get("/", function (req, res) {
    jogadores.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function (req, res) {
    var id = req.params.id;
    jogadores.find({ _id: id }, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/", function (req, res) {
    var obj = req.body;
    var model = new jogadores(obj);
    model.save(function (err) {
        if (err) {
            res.send(err);
            return;
        }
        res.send("created");
    });
});

router.post("/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;

    jogadores.findByIdAndUpdate(id, {nome: obj.nome, posicao: obj.posicao},
        function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
});

router.delete("/:id", function (req, res) {
    var id = req.params.id;
    jogadores.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;