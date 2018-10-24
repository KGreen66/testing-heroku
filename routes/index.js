const express = require('express')
const router = express.Router()
const donutController = require('../controllers/donuts')

// Example Route
// router.get('/', someController.index)

//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that triggers the donut controller index function
router.get('/', donutController.index)


//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that triggers the donut controller new function
router.get('/new', donutController.new)


//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that triggers the donut controller show function
router.get('/:id', donutController.show)



//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that triggers the donut controller create function
router.post('/', donutController.create)


//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that triggers the donut controller edit function
router.get('/:id/edit', donutController.edit)


//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that triggers the donut controller update function
router.put('/:id', donutController.update)
// Create a PATCH update route "/:id" that triggers the donut controller update function
router.patch('/:id', donutController.update)

//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that triggers the donut controller delete function
router.delete('/:id', donutController.delete)

module.exports = router