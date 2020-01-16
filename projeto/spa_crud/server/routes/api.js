var express = require('express'),
    router = express.Router();

//routes for user api
router.use("/user", require("../controllers/user.api"));
router.use("/equipas", require("../controllers/equipas"));
router.use("/jogadores", require("../controllers/jogadores"));
router.use("/jogo", require("../controllers/jogo"));
router.use("/ligas", require("../controllers/ligas"));
router.use("/mensagem", require("../controllers/mensagem"));

//add here other api routes

module.exports = router;