const express = require("express");
const connectDB = require("./db/database.js");
const ulrRouter = require("./routes/url.js")
const staticRouter = require("./routes/staticRoute.js")
const path = require("path");
const PORT = 5000;

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

////builtin middleware to take json data and put in req.body
app.use(express.json());
//builtin middleware to take date form a form and put in req.body
app.use(express.urlencoded({extended: false}));

app.use("/api/url", ulrRouter);
app.use("/", staticRouter);


app.listen(PORT, ()=>{console.log(`server started at PORT ${PORT}`)});