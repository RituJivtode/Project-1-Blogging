const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
  firstName:{
      type:string,
      required:true,
  },
  lastName:{
        type:String,
        required:true,
  },
  title:{
      type:String,
      enum:["Mr", "Mrs", "Miss"],
      required: true,
      },
    emailid:{
        type:String,
        validate: [validateEmail, 'Please fill a valid email address'],     
        unique:true,
        required:true,
    },
    passward:{
        type:String,
        required:true,

    },
}, { timestamps: true });


module.exports = mongoose.model('Author', authorSchema) 
