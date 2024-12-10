const express = require("express");
const Url = require("../models/Url.js")
const router = express.Router();

router.get("/", async (req, res) => {
    const urls = await Url.find({});
    const shortId = req.query.shortId || null;
    return res.render("home.ejs", { allurls: urls, shortId });
});



module.exports = router;