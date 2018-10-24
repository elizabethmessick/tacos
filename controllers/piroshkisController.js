const Piroshki = require('../models/Piroshki');

// these controller functions are middleware
// these are the last middleware that get hit
module.exports = {
    index: function (req, res, next) { // immediately send a response(it renders an index page) and it's going to call the Piroshki db and say get all of them and they will be passed into the page
        res.render('piroshkis/index', { piroshkis: Piroshki.getAllPiroshkis() }); // the 2nd parameter is rendering data 
    },
    new: function (req, res, next) { // constructs the form and sends out to the requesting person
        res.render('piroshkis/new'); // you don't need a 2nd parameter since you're not sending in data
    },
    create: function (req, res, next) {
        let data = req.body; // something that is created by middleware whenever a form is created for us. We find all the data in req.body
        Piroshki.addPiroshki(data.piroshkiName, data.piroshkiFilling, data.piroshkiSize) // input type text name = "piroshkiName"
        res.redirect('/piroshkis');
    },
    show: function (req, res, next) {
        res.render('piroshkis/show', { piroshki: Piroshki.getPiroshki(req.params.id), id: req.params.id });
    },
    edit: function (req, res, next) {
        piroshki = Piroshki.getPiroshki(req.params.id);
        res.render('piroshkis/edit', { piroshki: piroshki, id: req.params.id });
    },
    update: function (req, res, next) {
        let data = req.body;
        Piroshki.updatePiroshki(req.params.id, data.piroshkiName, data.piroshkiFilling, data.piroshkiSize);
        res.redirect(`/piroshkis/${req.params.id}`);
    },
    destroy: function (req, res, next) {
        Piroshki.deletePiroshki(req.params.id);
        res.redirect('/piroshkis')
    }
}