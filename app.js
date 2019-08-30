var express =require("express");
var app= express();

// var bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","ejs");


var campgrounds = [
           {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg",date:"16.5.19"},
           {name: "Granite Hill", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg",date:"14.5.19"},
           {name: "Sunset Beach Rest", image: "http://photosforclass.com/download/14435096036",date:"13.4.19"}
]; 


app.get("/",function(req,res){
   //landing page
	res.render("landing");
});


app.get("/events",function(req,res){
	
	res.render("MainPage", {campgrounds: campgrounds});
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