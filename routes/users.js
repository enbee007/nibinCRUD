var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var Student = require("../models/user");



router.get("/info", function(req, res){
	res.render("info", {
		title: "Student Information"
	});
});

router.post("/info", function(req, res){
	// console.log(req.body.name);
	// console.log(req.body.rollno);

	var student = new Student({
		rollno: req.body.rollno,
		name: req.body.name
		
	});
	

	//create new student
	// Student.createStudent(student, function(err,result){
	// 	if(err)
	// 		throw err;
	// 	console.log("NEW STUDENT SAVED SUCCESSFULLY");
	// 	console.log(result);
	// })

	student.save();
	console.log("new student created!!\n");
	console.log(student);
	res.redirect("/");
});

router.get("/find", function(err, res){
	Student.find({})
		.sort({"rollno": 1})
		.exec(function(err, result){
			if(err)
				throw err;
			if(result.length === 0){
				console.log("@@%%&&***no student found!!@@@##%%%");
			}else{
				console.log("\n\nlist of students!!");
				console.log(result);
			}
		});
	res.redirect("/");
});

//find by name
router.post("/findName", function(req, res){
	Student.find({name: req.body.name})
		.sort({"rollno": 1})
		.exec(function(err, result){
			if(err)
				throw err;
			if(result.length === 0){
				console.log("@@##$$%%&&*** "+req.body.name+" not found!!");
			}else{
				console.log("\n\nlist of students!!");
				console.log(result);
			}
		});
	res.redirect("/");
});

//update

router.post("/update", function(req, res){
	var element = req.body.element;
	var value = req.body.elementDescription;
	var conditions = { name: req.body.name };
	  //, update = { $set: { element: value }}  not dynamic!!
	var options = { multi: true, upsert: true};
	 
	//dynamically takes the element to be updated
	 var update = {$set: {}};
	 update.$set[element] = value;
	 

	Student.update(conditions, update, options, function(err, result){
		if(err)
			throw err;
		console.log("\n\n!!!!!"+req.body.name+"'s "+element+" updated to "+value+"!!!");
		console.log(result);
	});
	res.redirect("/");
});


//Delete
router.post("/delete", function(req, res){
	Student.remove({ name : req.body.name }, function (err) {
		if(err)
			throw err;
    	console.log("\n\n"+req.body.name+" deleted!!!");
	});
	res.redirect("/");
});
module.exports = router;