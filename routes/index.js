var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	res.render("home", {
		title:"NIBINs LIFE",
		meta:{age:22, height:"5.7ft", weight:"90kg"},
		description:"A great soul and a beautiful mind..has all the abilities to excel in life..just needs to completely focus on the goal...and rest will be awesome"
	});
});

module.exports = router;