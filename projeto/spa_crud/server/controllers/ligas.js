var express = require("express"),
    router = express.Router(),
    ligas = require("../models/ligas");

router.get("/", function (req, res) {
    ligas.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function (req, res) {
    var id = req.parms.id;
    ligas.find({_id: id}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/", function (req, res) {
    var obj = req.body;
    var model = new ligas(obj);
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

    ligas.findByIdAndUpdate(id, {nome: obj.nome},
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
    ligas.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;