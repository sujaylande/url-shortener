const express = require("express");
const {createUrl, visiteUrl} = require("../controllers/url.js")

const router = express.Router();

router.post("/create", createUrl);
router.get("/visite/:shortId", visiteUrl);



module.exports = router;

