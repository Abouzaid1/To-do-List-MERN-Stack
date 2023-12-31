const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	fname:{
		type: String,
		required: true
	},
	lname:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
})

const User = mongoose.model('User',userSchema)

module.exports = User