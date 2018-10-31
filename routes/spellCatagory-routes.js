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


};


