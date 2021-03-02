const server = require("express")();
const path = require("path");

const PORT = process.env.PORT || 3000;

server.all("/", (req, res) => {
	res.json({ "message": "hello world"});
});

server.listen(PORT, () => console.log(`listening on port $PORT`));
