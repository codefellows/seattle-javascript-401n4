'use strict';

const mongoose = require('mongoose');

const rosterSchema = mongoose.Schema({
   players: [{type:mongoose.Schema.Types.ObjectId, ref:'players'}]
});

module.exports = mongoose.model('rosters', rosterSchema);