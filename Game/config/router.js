const express = require("express");
const main = require("../app/controllers/main");
const mainController = require("../app/controllers/main");
const router = express.Router();



/*router.get("/bemvindo/:username", function(req, res){
    res.send(`Seja bem vindo ${req.params.username}`);
});*/

router.get("/", mainController.index);

router.get("/sobre", mainController.sobre);


module.exports = router;