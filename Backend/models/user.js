
 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
var saltRounds=10; 
 // List of columns for Employee schema
 let User = new Schema({
 name: {
 type: String,
 required:true
 },
 email: {
    type: String,
    required:true
    },
 password: {
 type:String,
 required:true
 }
});

 module.exports = mongoose.model('User',User);