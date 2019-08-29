var express =require("express");
var app= express();

// var bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","ejs");


app.get("/",function(req,res){
   //landing page
	res.render("landing");
});


app.get("/events",function(req,res){
	
	res.render("MainPage");
});


app.get("/ADDevents",function(req,res){
	
	res.render("addEvent");
});



app.listen(3000,function(){
	console.log("doof says yes")
});




// app.get("/page",function(req,res){
// 	res.render("page")
// });

// app.get("/query",function(req,res){
	
// 	res.render("query",{queryx:queryx})
// 	console.log(queryx);
	
// });

// app.post("/query",function(req,res){
	
	
// 	var name  =req.body.name;
// 	var email =req.body.email;
// 	var query =req.body.query;
	
// 	var newQuery= {name: name,email:email,query:query}
	
// 	console.log(newQuery);

// 	 console.log("typeof query: " + (typeof Query));
	
// 	 // queryx.push(new Person("sam",2,"M0"))
// 	 // queryx.push(new Person(name,email,query));	
// 	queryx.push(newQuery);	
	
// 	res.redirect("/query");
	
// });