var app = require("express")();
var exphbs  = require('express-handlebars');
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

var index = require("./routes/index");
var users = require("./routes/users");

app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/", index);
app.use("/users", users);

app.listen(PORT, function(){
	console.log("server started at port "+PORT);
});

module.exports = app;