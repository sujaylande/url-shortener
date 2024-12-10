const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        require: true,
        unique: true
    },
    originalUrl: {
        type: String,
        require: true
    },
    clicksInfo: [{ timestamp: {type: Number} }]
});

const Url = mongoose.model("url", urlSchema);

module.exports = Url;
