const express = require("express");
const path = require("path");
const router = require("./router");
const bodyParser = require("body-parser");

const server = express();

const PORT = process.env.PORT || 3000;

router.use(express.static(path.join(__dirname, "public")));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(router);

server.listen(PORT, () => console.log(`listening on port $PORT`));
