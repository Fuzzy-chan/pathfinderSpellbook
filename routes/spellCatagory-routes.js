var spells = require("../public/spells")

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

    app.get("/api/yourSpells", function (req, res) {
        var tempSpells = sessionStorage.getItem("yourSpells")
        var tempSpellsArray = tempSpells.split(",")
        var hbsObject = {
            spells: tempSpellsArray
        }
        res.render("spellCatagory", hbsObject)
    });

};


