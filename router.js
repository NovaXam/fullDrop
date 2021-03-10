const router = require("express").Router();

router.route("/play")
  .get((req, res, next) => {
    res.status(418)
    res.setHeader("X-Title", "zorg");
    res.send();
    next();
  })
  .post((req, res, next) => {
    const body = req.body;
    res.status(201);
    res.json({ user: body.name, status: "joined the game" });
    next();
  });

router.route("/")
  .get((req, res, next) => {
    res.json({ "message": "hello world" });
    next();
  });

module.exports = router;
