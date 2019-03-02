var spells = require("../public/spells")
var yourSpells ={};

module.exports = function (app) {

    app.get("/", function (req,res) {
        res.render("welcome");
    });

    app.get("/api/spellCatagory/:catagory", function (req, res) {
        var spellCat = req.params.catagory;
        var hbsObject = {
            spells: spells[spellCat]
        }
        res.render("spellCatagory", hbsObject)
    });

    app.post("/api/spellCatagory/yourSpells", function(req,res) {
        yourSpells = req.body.yourSpells
        
    })

    app.get("/api/yourSpells", function (req, res) {
        // var spellsArray =JSON.parse(yourSpells)
        var spells = yourSpells
        
        var hbsObject = {
           spells: spells
        }
        res.render("yourSpells", hbsObject)
    });
};


