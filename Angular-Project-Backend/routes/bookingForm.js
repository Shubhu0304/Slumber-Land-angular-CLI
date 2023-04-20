const express = require("express");
const Model = require("../models/model");
const User = require("../models/users");
var mongo = require("mongodb");

const app = express();
const jwt = require("jsonwebtoken");

var bodyParser = require("body-parser");
const { json } = require("express");
const router = express.Router();
const bookingFormController = require('../controllers/BookingControllers/bookingFormController');

router.get('/getForm', bookingFormController.createBookingForm);

// POST route to submit a new booking form
//router.post('/', bookingFormController.submitBookingForm);

// GET route to retrieve all booking forms
//outer.get('/', bookingFormController.getAllBookingForms);

// GET route to retrieve a single booking form by ID
router.get('/:id', bookingFormController.getBookingFormById);

// PUT route to update a booking form by ID
//router.put('/:id', bookingFormController.updateBookingForm);

// DELETE route to delete a booking form by ID
//router.delete('/:id', bookingFormController.deleteBookingForm);

module.exports = router;
