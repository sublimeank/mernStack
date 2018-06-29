var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let toDos = require('./models/todo')
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/toDoApp')


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
console.log("-----------------------hey... i'm running--------------------------")
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//APIs

//POST BOOK

app.post('/todos', function(req,res){
  let toDo = req.body
  toDos.create(toDo, (err, toDos) =>{
    if(err){
      throw err;
    }
    res.json(toDos)
  })
});


// GET-------------BOOK

app.get('/todos', (req, res) => {
    toDos.find((err, todo) =>{
      if(err){
        throw err
      }
      res.json(todo)
    })
})

// DELETE--------todo
app.delete('/todos/:_id',(req, res) => {
let query =  {_id: req.params._id}
toDos.remove(query,(err,todo)=>{
if(err){
  throw err;
}
res.json(todo)
})
})
//UPDATE=======BOOK
app.put('/todos/:_id',(req, res)=>{
  console.log('inside the block :',req.body )
  let todo = req.body
 let query = req.params._id
 let update = {
   "$set":{
    description: todo.description,
     date: todo.date,
     time: todo.time,
     followers: todo.followers
   }
 }
 let options = {new: true}
 toDos.findOneAndUpdate(query, update, options, (err, todo)=>{
   if(err){
     throw err
   }
   res.json(todo)
 })
})

//END APIs
app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
