var express = require('express'),
    router = express.Router();

//routes for user api
router.use("/user", require("../controllers/user.api"));

//add here other api routes
router.use("/equipas", require("../routes/equipas"));
router.use("/jogadores", require("../routes/jogadores"));
router.use("/jogo", require("../routes/jogo"));
router.use("/ligas", require("../routes/ligas"));
router.use("/mensagem", require("../routes/mensagem"));

module.exports = router;