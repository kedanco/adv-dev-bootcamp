let express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

let todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Everything in these folders will be served as static files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

const port = "3000";

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.get("/happy", function(req, res) {
	res.send(":)");
});

app.listen(port, function() {
	console.log("App is running on port" + port);
});

process.on("unhandledRejection", (reason, p) => {
	console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
	// application specific logging, throwing an error, or other logic here
});
