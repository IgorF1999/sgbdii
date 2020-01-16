var express = require("express"),
    router = express.Router(),
    jogo = require("../models/jogo");

router.get("/", function (req, res) {
    jogo.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function (req, res) {
    var id = req.params.id;
    jogo.find({_id: id}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/", function (req, res) {
    var obj = req.body;
    var model = new jogo(obj);
    model.save(function (err) {
        if (err) {
            res.send(err);
            return;
        }
        res.send("created");
    });
});

router.delete("/:id", function (req, res) {
    var id  = req.params.id;
    jogo.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;