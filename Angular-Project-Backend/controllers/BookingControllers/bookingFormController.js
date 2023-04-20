const bookingForm = require('../../models/bookingForm');
const Model = require("../../models/model");

exports.createBookingForm = (req, res) => {
  const bookingForm = new BookingForm(req.body);
  bookingForm.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: 'Unable to save booking form data'
      });
    }
    res.json(data);
  });
};

exports.getBookingFormById = (req, res, next, id) => {
  BookingForm.findById(id).exec((err, bookingForm) => {
    if (err || !bookingForm) {
      return res.status(400).json({
        error: 'Booking form not found'
      });
    }
    req.bookingForm = bookingForm;
    next();
  });
};

exports.getBookingForm = (req, res) => {
  return res.json(req.bookingForm);
};
