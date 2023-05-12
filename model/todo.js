//require of mongoose
const mongoose = require('mongoose');

//Make Schema of the Todo-App .
const todoSchema = new mongoose.Schema({
    description : {
        type:'string',
        required : true
    },
    category : {
        type : 'string',
        required : true
    },
    date : {
        type:'string',
        required:true
    }
});

const Todo = mongoose.model('Todo' , todoSchema);

//export the Schema to the index.js
module.exports = Todo;