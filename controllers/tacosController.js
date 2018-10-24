const Taco = require('../models/Taco');

// these controller functions are middleware
// these are the last middleware that get hit
module.exports = {
    index: function (req, res, next) { // immediately send a response(it renders an index page) and it's going to call the taco db and say get all of them and they will be passed into the page
        res.render('tacos/index', { tacos: Taco.getAllTacos() }); // the 2nd parameter is rendering data 
    },
    new: function (req, res, next) { // constructs the form and sends out to the requesting person
        res.render('tacos/new'); // you don't need a 2nd parameter since you're not sending in data
    },
    create: function (req, res, next) {
        let data = req.body; // something that is created by middleware whenever a form is created for us. We find all the data in req.body
        Taco.addTaco(data.tacoName, data.tacoProtein, data.tacoGarnish) // input type text name = "tacoName"
        res.redirect('/tacos');
    },
    show: function (req, res, next) {
        res.render('tacos/show', { taco: Taco.getTaco(req.params.id), id: req.params.id });
    },
    edit: function (req, res, next) {
        taco = Taco.getTaco(req.params.id);
        res.render('tacos/edit', { taco: taco, id: req.params.id });
    },
    update: function (req, res, next) {
        let data = req.body;
        Taco.updateTaco(req.params.id, data.tacoName, data.tacoProtein, data.tacoGarnish);
        res.redirect(`/tacos/${req.params.id}`);
    },
    destroy: function (req, res, next) {
        Taco.deleteTaco(req.params.id);
        res.redirect('/tacos')
    }
}