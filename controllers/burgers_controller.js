var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");


router.get("/", function(req,res){
	res.redirect("burgers")
});

router.get("/burgers", function(req,res){
	burgers.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req,res){
	burgers.create([
		"burger_name"
		],[
			req.body.burger_name
			], function(data){
				res.redirect("/burgers");
			});
});



router.put("/burgers/update/:id", function(req,res){
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burgers.update({
    "devoured": req.body.devoured
    //devoured: true,
	}, condition, function(data){
    res.redirect("/burgers")
    console.log(data);
	});
});

router.delete("/burgers/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function(result) {
    // if (result.affectedRows == 0) {
    //    If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
    res.redirect("/burgers")
  });
});



// Export routes for server.js to use.*/
module.exports = router;