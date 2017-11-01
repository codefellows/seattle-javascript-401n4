'use strict';

const mongoose = require('mongoose');
const Roster = require('./rosters');

const teamSchema = mongoose.Schema({
   name: {type:String, require:true},
   roster: {type:mongoose.Schema.Types.ObjectId, ref:'rosters'}
});

// before we save a team we want to make sure it has a valid roster pointer
teamSchema.pre('save', function(done){
    
    // { name: "14u Black"}
    // { name: "14u Black", roster: "alsdfkjsdoiuasdf" }
    
    // See if this team has a roster
        // If not, create one, get its id, point to it
        // If it does, yea!
        
    Roster.findById(this.roster)
          .then( roster => {
              if (! roster) {
                  let newRoster = new Roster({});
                  return newRoster.save();
              }
              else { return roster; }
          })
          .then( roster => this.roster = roster._id )
          .then( () => done() )
          .catch(done);

    // { _id: "alsdfkjsdoiuasdf", players:[] }
    // { name: "14u Black", roster: "alsdfkjsdoiuasdf" }
});

teamSchema.pre('findOne', function(){
  this.populate({
      path:"roster",
      populate: {
          path: "players"
      }
  })
});



// teamSchema.post('remove', function(done){
// });

module.exports = mongoose.model('teams', teamSchema);