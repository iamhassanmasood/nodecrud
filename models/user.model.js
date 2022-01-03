const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({

  name:{
    type:String,
    unique:true,
    minlength:3,
    required:true
  },
  email: {
    type: String,
    unique:true,
    required:true
  },
  role: {
    type:String,
    enum:["superadmin", "admin", "user"],
    required:true
   },
  password: {
    type: String,
    required:true,
  }
},
{
  collection: 'User'
})


module.exports =mongoose.model('User', UserSchema)