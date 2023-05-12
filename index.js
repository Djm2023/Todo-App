//Require of express
const express = require('express');

//Linking database with index.js by accessing config folder.
const db = require('./config/mongoose');

//Link Model with the index.js and fetch data as and when required by Todo.
const Todo = require('./model/todo');

const port = 8000;

// creating instance for the Express.
const app = express();

// Use of middleware which is inbuid.
app.use(express.urlencoded());

//Tell view engine to set for Ejs.
app.set('view engine' , 'ejs');

// Access views from the Views folder.
app.set('views','./views');

// Use static files in the file name as assets.
app.use(express.static('assets'));

//Render of todo.ejs file to the browser.
app.get('/',async function(req,res){
    let Todo_ = await Todo.find({});
    return res.render('todo',{
        title:'TODO-App',
        Todo_data:Todo_
    });
   
});

// Create the form using POST http method.
app.post('/create-todo' , async function(req,res){

    await Todo.create({
        description : req.body.description,
        category : req.body.category,
        date : req.body.date,
    });
    res.redirect('/');
});

// Delete the data from database if user wants using GET http method
app.get('/delete-todo' , async function(req,res){
    try {
        let id = req.query;
        let count = Object.keys(id).length;

        for(let i=0 ; i<count ; i++){

        await Todo.findByIdAndDelete(Object.keys(id)[i]);

        }
    }    
    catch (error) {
        console.log('Error in deleting the data from database');
        
    }
    
    return res.redirect('/');
});

// Start the server with port defined above.
app.listen(port , function(error){
    if(error){
        console.log('Error in connecting the server',error);
        return;
    }
    console.log('Server is connected at port::',port);
})
