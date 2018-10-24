const express = require('express');
const router = express.Router(); // creates a new router object and puts it into the router variable.
const tacos = require('../controllers/tacosController');

// router lets us attactch these routes onto the router object and export these routes

// GET / tacos - returns all tacos 
router.get('/tacos', tacos.index); // calling functions from another file
// GET /tacos/new - returns the creation form
router.get('/tacos/new', tacos.new); // sends the form for creating a new taco
// POST /tacos - adds the form data to the db
router.post('/tacos', tacos.create); // when the form gets sent back to us it's this route
// the two above go hand in hand 
// GET /tacos/:id - returns one taco
router.get('/tacos/:id', tacos.show); // anything you put a colon in front of becomes a variable
// GET /tacos/:id/edit - returns the update form
router.get('/tacos/:id/edit', tacos.edit);
// PUT / tacos/:id - updates the selected taco
router.put('/tacos/:id', tacos.update); // this is the update route
//DELETE /tacos/:id - deletes the selected taco
router.delete('/tacos/:id', tacos.destroy);

module.exports = router; // once this start getting app.used, that's when these routes start working