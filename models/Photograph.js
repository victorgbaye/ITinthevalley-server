const mongoose = require('mongoose');


const photographSchema = new mongoose.Schema({
    photographer:{
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 50,
        minlength: 3,
        trim: true
      },
      email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
        trim: true
      },
      number: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        trim: true,
        validate: {
          validator: function(v) {
            return /^\d{10,15}$/.test(v);
          },
          message: props => `${props.value} is not a valid mobile number!`
        },
      },
      title:{
        type: String,
        required: [true, 'Please provide title'],
        maxlength: 50,
        minlength: 3,
        trim: true

      },
      photoURL: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(v);
            },
            message: props => `${props.value} is not a valid photo url!`
        },
    },
      description:{
        type: String,
        required: false,
        maxlength: 50,
        minlength: 3,
        trim: true

      },
})

module.exports = mongoose.model('photograph', photographSchema)