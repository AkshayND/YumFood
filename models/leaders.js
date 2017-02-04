// ASSIGNMENT 2! LEADER PART
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


// creating a schema
var leaderSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image:{
		type: String,
		required: true
	},
	designation:{
		type: String,
		required: true
	},
	abbr:{
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

//schema is useless till now, we need to create a modal for it.

var Leaders = mongoose.model('leader', leaderSchema); 
// when we supply first argument, like Dish, mongoose will automatically create a collection that will be named  with the plural form of the first arg, for eg Leaders.

//make this available to node modules
module.exports = Leaders;