function index (req, res) {
    res.render("main/index", { 
      //  titulo: "Inicio",
       // layout: false
    });
}


function sobre (req, res) {
    res.render("main/sobre", {
       // titulo: "O jogo Vigilantes da Floresta ",
       // layout: false
    })
}


module.exports = { index, sobre }