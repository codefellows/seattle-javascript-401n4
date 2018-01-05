npm i -S express body-parser morgan cors http-errors mongoose dotenv mongodb bluebird
npm i -D jest superagent

==========================================================

// SERVER //
'use strict';

// Core Dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// 3rd party middleware
const cors = require('cors');
const morgan = require('morgan');


// DB Connection
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient:true});


// App
const app = express();
let isOn = false;
let http = null;


// Register app wide middleware

// CORS
app.use( cors({origin: process.env.ORIGIN_URL}) );

// LOGGER
app.use(morgan('dev'));


// register routes
app.use( require("../routes/team") );
app.use( require("../routes/player") );


// 404 route
app.all('*', (req, res) => res.sendStatus(404));

// error middleware
app.use( require("./middleware/error") );

==========================================================

// ROUTER //
'use strict';

const express = require('express');
const httpError = require('http-errors');
const jsonParser = require('body-parser').json();
const Team = require(__dirname + '/../models/team');

const teamRouter = module.exports = express.Router();

teamRouter.post('/teams', jsonParser, (req,res,next) => {
  
  let newTeam = new Team(req.body);
  newTeam.save()
    .then(data => res.send(data))
    .catch(err => next({statusCode: 500, message: 'error creating team', error: err}));
});

==========================================================

// MODEL //
'use strict';

const mongoose = require('mongoose');
const Team = require('./team');

const mySchema = mongoose.Schema({
   name: {type:String, require:true},
   roster: {type:mongoose.Schema.Types.ObjectId, ref:'roster'}
});

mySchema.pre('findOne', function(){
   // this.populate({path:'roster', populate:{path:'players', model:'player'}});
});

// before we save a team we want to make sure it has a valid roster pointer
mySchema.pre('save', function(done){
});

mySchema.post('remove', function(done){
});

module.exports = mongoose.model('something', mySchema);

==========================================================

// ERROR //

'use strict';

module.exports = (err, req, res, next) => {
    
    // console.log("ERR", err);
    
    if( err.statusCode ) { 
        return res.sendStatus(err.statusCode);
    }
    
    return res.sendStatus(500);
    
};