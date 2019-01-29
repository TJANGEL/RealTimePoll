const express = require("express");
const router = express.Router();

const Pusher = require("pusher");

var pusher = new Pusher({
  appId: "702540",
  key: "d949e11a93398f590024",
  secret: "a0842f244a7d82aa97cd",
  cluster: "us2",
  encrypted: true
});

router.get("/", (req, res) => {
  res.send("POLL");
});

router.post("/", (req, res) => {
  pusher.trigger("os-poll", "os-vote", {
    points: 1,
    os: req.body.os
  });
  return res.json({ sucess: true, message: "Thank You for Voting" });
});

module.export = router;
