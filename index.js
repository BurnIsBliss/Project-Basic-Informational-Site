const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html", (err) => {
		if (err) throw err;
	});
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/views/about.html", (err) => {
		if (err) throw err;
	});
});

app.get("/contact-me", (req, res) => {
	res.sendFile(__dirname + "/views/contact-me.html", (err) => {
		if (err) throw err;
	});
});

app.get(/\/*/, (req, res) => {
	res.status(404);
	res.sendFile(__dirname + "/views/404.html", (err) => {
		if (err) throw err;
	});
});

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
	console.log(`Server running on PORT, ${PORT}`);
});
