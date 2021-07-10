const express = require('express');

const router = express();

router.use("/assets/CSS", express.static(__dirname + "/assets/CSS"));
router.use("/assets/img", express.static(__dirname + "/assets/img"));

router.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})
router.get("/about", function(req, res) {
    res.sendFile(__dirname + "/about.html");
})

router.listen(process.env.PORT || 5000, function() {
    console.log("We are live");
})