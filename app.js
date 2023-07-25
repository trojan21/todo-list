const express = require("express")
const bodyParser = require("body-parser")

const app = new express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
var items = [];
const day = require(__dirname + "/day.js")

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
app.get("/", function (req, res) {
    // res.send("hello, the day is "+ d.getDay());
    
    res.render('list', { listTitle: day(), newListItems: items });
})
app.post("/", function (req, res) {
    var item = req.body.newItem
    items.push(item);
    res.redirect("/");
})
app.listen(3000, function () {
    console.log("Server is running")
})