var express = require('express'),
    router = express.Router();

//routes for user api
router.use("/user", require("../controllers/user.api"));
router.use("/equipas", require("../routes/equipas"));
router.use("/jogadores", require("../routes/jogadores"));
router.use("/jogo", require("../routes/jogo"));
router.use("/ligas", require("../routes/ligas"));
router.use("/mensagem", require("../routes/mensagem"));

//add here other api routes

module.exports = router;