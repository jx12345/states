var mongoose = require('mongoose');
var schema = require('./schema_states');
var util = require('util');

mongoose.connect('mongodb://localhost:27017/states');

var State = mongoose.model('State', schema, 'states');

var state = new State({
  name: 'Arkansas',
  capital: 'Little Rock',
  largest_town: 'Little Rock'
});

//state.save(function(error) {
//  if (error) {
//    console.log(error);
//    process.exit(1);
//  }

  State.find({ name: 'Alabama' }, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(JSON.stringify(docs));
    console.log(util.inspect(docs, false, null));
    process.exit(0);
  });
//});

