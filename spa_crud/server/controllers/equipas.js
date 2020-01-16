var express = require("express"),
    router = express.Router(),
    equipas = require("../models/equipas");

router.get("/", function (req, res) {
    equipas.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function (req, res) {
    var id = req.params.id;
    equipas.find({ _id: id }, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/", function (req, res) {
    var obj = req.body;
    var model = new equipas(obj);
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

    equipas.findByIdAndUpdate(id, {nome: obj.nome},
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
    equipas.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;