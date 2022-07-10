const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: true }));

const Therapist = require("./models/therapistData.js");
const User = require("./models/users.js");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/theraplyDB")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Mongo connection error");
    console.log(err);
  });
// var userExists = false
//   User.exists({name:'test1'}, function (err, doc) {
//     if (err){
//         console.log(err)
//         console.log(userExists)
//     }else{
//         console.log("Result :", doc) 
//         userExists = true
//         console.log(userExists)
//     }
// });

//connection to react
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

//route for registration requests
app.post("/registration", function (req, res) {
  const { newName, newEmail, newPassword } = req.body;
  if (newName && newEmail && newPassword) {
    var newUser = new User({
      name: newName,
      email: newEmail,
      password: newPassword,
    });
    newUser.save();
  } else {
    // res.send("Please fill out all required fields");
    res.status(400).send('Something broke!')
  }
});

//list of therapists
app.get("/therapists", async (req, res) => {
  const allTherapists = await Therapist.find({});
  res.json(allTherapists);
});

app.get("/therapists/:id", async (req, res) => {
  const { id } = req.params;
  therapistData = await Therapist.findById(id);
  res.json(therapistData);
});

app.get("/therapists/:id/name", async (req, res) => {
  const { id } = req.params;
  therapistData = await Therapist.findById(id);
  res.json(therapistData.name);
});

app.get("/therapists/:id/address", async (req, res) => {
  const { id } = req.params;
  therapistData = await Therapist.findById(id);
  res.json(therapistData.address);
});

app.get("/therapists/:id/website", async (req, res) => {
  const { id } = req.params;
  therapistData = await Therapist.findById(id);
  res.send(therapistData.website);
});

app.get("/therapists/:id/language", async (req, res) => {
  const { id } = req.params;
  therapistData = await Therapist.findById(id);
  res.json(therapistData.language);
});

app.get("/therapists/:id/email", async (req, res) => {
  const { id } = req.params;
  therapistData = await Therapist.findById(id);
  res.json(therapistData.email);
});


app.listen(8800, () => {
  console.log("listening on port 8800");
});
