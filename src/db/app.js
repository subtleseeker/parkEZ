var  express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended:true } ) );
app.set("view engine","ejs");

var dateTime = require('node-datetime');
var dt = dateTime.create();
dt.format('m/d/Y H:M:S');
console.log(new Date(dt.now()));

var userschema = new mongoose.Schema({
    email: String,
    credit_no: Number,
    disabled: Boolean,
    Date: {type: Date,default: Date.now}
});

var historyschema = new mongoose.Schema({
    email: String,
    start_time: Date,
    stop_time: Date,
    Date: {type: Date,default: Date.now},
    bill: Number
});

/*var allotmentschema = new mongoose.Schema({
    id1: String,
    id2: String,
    id3: String,
    isavailable1: Boolean,
    isavailable2: Boolean,
    isavailable3: Boolean
})*/
//var Blog = mongoose.model('Blog',allotmentschema);

app.get("/insert_user/:email/:credit/:disable",function(req,res)
{
    mongoose.connect("mongodb://user:123456a@ds237373.mlab.com:37373/parkez1", function(err, db){
       var x1 = req.params.email;
       var x2 = req.params.credit;
       var x3 = req.params.disable;
       console.log(x1);
        db.collection("userinfo").insertOne({
            email: x1,
            credit_no: x2,
            disabled: x3,
            Date: {type: Date,default: Date.now}
        }, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
          });
    })
});

/*app.get("/insert_allot",function(req,res)
{
    //res.send(new Date(dt.now()));
    mongoose.connect("mongodb://user:123456a@ds237373.mlab.com:37373/parkez1", function(err, db) {

        db.collection("allotinfo").insertOne({
            id1: "one",
            id2: "two",
            id3: "three",
            isavailable1: false,
            isavailable2: false,
            isavailable3: false
        }, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
          });
    })
})*/

app.get("/enter/:email",function(req,res)
{
    mongoose.connect("mongodb://user:123456a@ds237373.mlab.com:37373/parkez1", function(err, db){
        var x1 = req.params.email;
        db.collection("historyinfo").insertOne({
        email: x1,
        start_time: require('node-datetime'),
        stop_time: require('node-datetime'),
        bill: 100,
        Date: {type: Date,default: Date.now}}, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted in historyinfo: "  );
          db.close();
    })
})
});

/*app.get("/update_allot/:number",function(req,res)
{
    mongoose.connect("mongodb://user:123456a@ds237373.mlab.com:37373/parkez1", function(err, db){
        var x = req.params.number;
        console.log(x);
        var s1,s2,s3;
        var myquery = { id1: "one" };
        if(x & 1) s1 = true; else s1 = false;
        if(x & 2) s2 = true; else s2 = false;
        if(x & 4) s3 = true; else s3 = false;
        var newvalues = { $set: {  isavailable1: s1 , isavailable2: s2, isavailable3: s3 } };
        db.collection("allotinfo").updateOne( myquery,newvalues, function(err, res) {
          if (err) throw err;
          console.log("Number of documents updated in allotinfo: " + x );
          db.close();
    })
})
});*/
// insert start and end time of a particular user
app.get("/exit/:email",function(req,res)
{
    mongoose.connect("mongodb://user:123456a@ds237373.mlab.com:37373/parkez1", function(err, db){
        var myquery = req.params.email;
        var newvalues = { $set: {stop_time: require('node-datetime') } };    
        db.collection("historyinfo").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted in history_: " + res.insertedCount);
            db.close();
          });
    })

});

app.get("/find_user/:email",function(req,res)
{
    email = req.params.email;
    mongoose.connect("mongodb://user:123456a@ds237373.mlab.com:37373/parkez1", function(err, db){
        db.collection("userinfo").find({}).toArray(function(err, result) {
            if (err) throw err;
            result.forEach(user => {
                if (user.email === email) {
                    console.log(user);
                    var data = JSON.stringify(user);
                    res.setHeader('Content-disposition', 'attachment; filename= myFile.json');
                    res.setHeader('Content-type', 'application/json');
                    res.write(data, function (err) {
                        res.end();
                    });
                }
            });
            db.close();
    });
});

});


app.get("/",function(req,res)
{
    res.send("Welcome to the PARKEZ");
});

app.listen(process.env.PORT ,function()
{
    console.log("server ");
});
