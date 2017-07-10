const mongoose = require('mongoose');
const mongoDBTVSeries = 'mongodb://localhost/db_tv_series';


mongoose.connect(mongoDBTVSeries);

mongoose.connection.on('error', ()=>{
  console.log('Mongoose connection error: '+mongoDBTVSeries);
});
mongoose.connection.on('connected', ()=>{
  console.log('Mongoose default connection to: '+mongoDBTVSeries);
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
