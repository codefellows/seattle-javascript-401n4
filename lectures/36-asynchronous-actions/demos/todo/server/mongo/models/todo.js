'use strict';

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
   task: {type:String, required: true},
   complete: {type:Boolean, required: true, default:false}
});


module.exports = mongoose.model('todo', todoSchema);