
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var url = require("url");

var app = express();

var connection = require("./config/connection.js")
// var burgerController = require("./controllers/burgers_controllers.js");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Serve index.handlebars to the root route.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { burgers: data });
  });
});

app.post("/", function(req, res) {    
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err,result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }

    // Send back the ID of the new quote
    res.redirect("/");
  });
});



// Update a quote by an id and then redirect to the root route.
app.put("/:id", function(req, res) {
  let id = req.params.id;
   console.log(id);
  // console.log(res)
  connection.query(
    "UPDATE burgers SET devoured = true WHERE id = ?",
    [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      } 
      //console.log(result);      
      res.redirect("/");
      // console.log("pass");
      // location.reload("/");
    });
  // res.redirect("/");  
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
