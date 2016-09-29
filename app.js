var app = require("express")();
var exphbs  = require('express-handlebars');
var bodyParser = require("body-parser");

var index = require("./routes/index");
var users = require("./routes/users");

app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/", index);
app.use("/users", users);

app.listen("3000", function(){
	console.log("server started at port 3000.");
});

module.exports = app;