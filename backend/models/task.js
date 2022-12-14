const mongoose = require('mongoose');
const Schema = mongoose.Schema; // getting the schema from the mongoose object (constructor function)

// remember the schema is the thing that defines the structure of our documents
// a schema is the thing that is going to define the structure of the documents 
// that we're gonna later store inside a collection. It's the thing that a model wraps around okay
const taskSchema = new Schema({ // creates new instance of a schema object
    // the different properties that a time object might have
    status: {
        type: String,
        required: true // this field is required for time documents
    },
    text: {
        type: String,
        required: true // this field is required for time documents
    }, 
    start: {
        type: String,
        required: true // this field is required for time documents
    }, 
    end: {
        type: String,
        required: true // this field is required for time documents
    }, 
    priority: {
        type: String,
        required: true // this field is required for time documents
    },
    user_id: {
        type: String,
        required: true
    } 
}, {timestamps: true}); // second arg = options object
// automatically generates time stamp properties for us on our blog documents 
// as well so like a created and updated a property and 
// every time we therefore in the future update or create a task document 
// it's going to auto assign values to those properties for us

// the model is the thing that surrounds the schema and 
// then provides us with an interface by which to communicate 
// with a database collection for that document type

// this model takes in as a 1st arg = the name of this model 
// it's going to look at this name it's going to pluralize it and then 
// look for that collection inside the database whenever we use this model 
// in the future to communicate with the database
// 2nd arg = the schema that we want to base this model on
const Task = mongoose.model('Task', taskSchema) // it will look for 'Tasks' collection based on this name

// export this model so we can use it elsewhere.
module.exports = Task;