var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var index = require('./routes/index');
var users = require('./routes/users');
const uri = 'mongodb://movies:movies@ds153412.mlab.com:53412/moviescache'
var app = express();

var db_config = {
  development:'mongodb://movies:movies@ds153412.mlab.com:53412/moviescache',
  test: 'mongodb://movies:movies@ds153412.mlab.com:53412/moviescache-test'
}
var current_env = app.settings.env //developnent / test / production
mongoose.connect(db_config[current_env],function(err,res){
  if(err){
    console.log('error database',err);
  }
  else{
    console.log('connected to database', db_config[current_env]);
  }
})
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
