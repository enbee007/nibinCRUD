var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/crud");
mongoose.connection.on('open', function() {
console.log('Mongoose connected.');
});

var Schema = mongoose.Schema;
var studentInfo = new Schema({
	rollno:Number,
	name: String,
	age:{
		type:String,
		max:24
	},
	mobile:{
		type:String
	},
	branch:{
		type: String,
		default: "Computer Science"
	}
});

module.exports = mongoose.model("Student", studentInfo);

//new student
module.exports.createStudent = function(student, result){
	
	// studentInfo.pre("save", function(next){
	// 	this.date= new Date();
	// 	next();
	// });
	student.save(result);
};

// ******Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead:

// events.js:141
//     throw er; // Unhandled 'error' event************