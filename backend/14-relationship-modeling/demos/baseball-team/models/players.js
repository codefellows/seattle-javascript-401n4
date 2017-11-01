'use strict';

const mongoose = require('mongoose');
const Team = require("./teams");
const Roster = require("./rosters");

const playerSchema = mongoose.Schema({
   name: {type:String, required: true},
   position: {type:String, required: true},
   bats: {type:String, required: true},
   throws: {type:String, required: true},
   team: {type:mongoose.Schema.Types.ObjectId, ref:'teams'},
   roster: {type:mongoose.Schema.Types.ObjectId, ref:'rosters'}
});


playerSchema.pre('findOne', function(done) {
   
   this.populate({
      path:"team",
      populate: {
         path: "roster",
         populate: {
            path: "players"
         }
      }
   });
   
   done();
   
});


playerSchema.pre('save', function(done){
   
   // {name:"a", team:"sdafsdfaj"... }
   
   // Is it a valid team
      // Yes ...
         // Get the roster id from the team
         // Store the team id and the roster id on me
         // Add me to the roster
         
   Team.findById(this.team)
       .then(team => {
          if( !team ) { 
             return Promise.reject();
          }
          else {
             this.team = team._id;
             this.roster = team.roster._id;
             return Promise.resolve(this.roster);
          }
       })
       .then( (roster) => {
         Roster.findOneAndUpdate(
            {_id:roster}, 
            { $addToSet: {players:this._id} }
         )
         .then(Promise.resolve())
         .catch(err => Promise.reject(err));
         
       })
       .then( () => done() )
       .catch(done);
   
   // {_id:'123', name:"a", team:"sdafsdfaj", roster:"sdkfsdlfjf"}
   // {_id:"sdkfsdlfjf", players:[123] }
});


module.exports = mongoose.model('players', playerSchema);