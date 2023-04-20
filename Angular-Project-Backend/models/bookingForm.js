const mongoose = require('mongoose');

const bookingFormSchema = new mongoose.Schema({
  // book_id:{
  //   type:Number,
  //   required: true
  // },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
  guests: {
    type: Number,
    required: true
  },
  rooms:{
    type: Number,
    required:true
  },
  email: {
    type: String,
    required: true
}
});

module.exports = mongoose.model('bookingForm', bookingFormSchema);
