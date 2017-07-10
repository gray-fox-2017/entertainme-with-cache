const mongoose = require('mongoose');
const mongoDBMovie = 'mongodb://localhost/db_movies';


mongoose.connect(mongoDBMovie);

mongoose.connection.on('error', ()=>{
  console.log('Mongoose connection error: '+mongoDBMovie);
});
mongoose.connection.on('connected', ()=>{
  console.log('Mongoose default connection to: '+mongoDBMovie);
});

mongoose.connection.on('disconnected', ()=>{
  console.log('Mongoose default connection disconnected');
});

process.on('SIGNINT', ()=>{
  mongoose.connection.close(()=>{
    console.log('Mongoose default connection trought app terminated');
    process.exit(0)
  });
});
