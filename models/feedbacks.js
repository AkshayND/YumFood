var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var telSchema = new Schema({
	areaCode: {
		type: Number,
		required: true
	},
	number: {
		type: Number,
		required: true
	}
});

var feedbackSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	agree:{
		type: Boolean,
		default: false
	},
	email: {
		type: String,
		required: true
	},
	tel: telSchema
}, {
	timestamps: true
});

//schema is useless till now, we need to create a modal for it.

var Feedbacks = mongoose.model('feedback', feedbackSchema); 
// when we supply first argument, like Dish, mongoose will automatically create a collection that will be named  with the plural form of the first arg, for eg Feedbacks.

//make this available to node modules
module.exports = Feedbacks;