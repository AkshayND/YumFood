// ASSIGNMENT 2! PROMOTION PART
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


// creating a schema
var promotionSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image:{
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
	}
}, {
	timestamps: true
});

//schema is useless till now, we need to create a modal for it.

var Promotions = mongoose.model('Promotion', promotionSchema); 
// when we supply first argument, like Dish, mongoose will automatically create a collection that will be named  with the plural form of the first arg, for eg Promotions.

//make this available to node modules
module.exports = Promotions;