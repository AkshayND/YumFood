// ASSIGNMENT 2! DISHES PART
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
	rating:{
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment:{
		type: String,
		required: true
	},
	author:{
		type: String,
		required:true
	}
}, {
	timestamps: true
});

// creating a schema
var dishSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image:{
		type: String,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	label:{
		type: String,
		default: ''
	},
	price:{
		type: Currency,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	comments: [commentSchema]
}, {
	timestamps: true
});

//schema is useless till now, we need to create a modal for it.

var Dishes = mongoose.model('Dish', dishSchema); 
// when we supply first argument, like Dish, mongoose will automatically create a collection that will be named  with the plural form of the first arg, for eg Dishes.

//make this available to node modules
module.exports = Dishes;