//require of mongoose.
const mongoose = require('mongoose');

// Connect with the database using localhost and the name of the database is TodoDB.
mongoose.connect('mongodb://127.0.0.1/TodoDB');

//Establish connection
const db = mongoose.connection;

// Check whether Database is connected or not and simultaneously gives the message.
db.on('error',console.error.bind(console,'Error in connecting with the Database.'));

db.once('open' , function(){
    console.log('Successfully connected to the Database');
});




