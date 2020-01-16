var express = require("express"),
    router = express.Router(),
    mensagem = require("../models/mensagem");

router.get("/", function (req, res) {
    mensagem.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function (req, res) {
    var id = req.parms.id;
    mensagem.find({_id: id}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/", function (req, res) {
    var obj = req.body;
    var model = new mensagem(obj);
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

    mensagem.findByIdAndUpdate(id, {posicao: obj.posicao},
        function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
});

router.delete("/:id", function (req, res) {
    var id  = req.params.id;
    mensagem.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;