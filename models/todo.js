let mongoose = require('mongoose')

let toDosSchema = mongoose.Schema({
   description: String,
   date: String,
   time: String,
   followers: Number 
})

let toDos = mongoose.model('toDos', toDosSchema)
module.exports = toDos