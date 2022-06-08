const express = require('express');
const app = express();
const path = require('path');

const Therapist = require('./models/therapistData.js')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/theraplyDB')
    .then(()=>{
        console.log('Mongo Connection Open')
    })
    .catch(err => {
        console.log('Mongo connection error')
        console.log(err)
    })


//homepage
const homepage = app.use(express.static('../home page'))
app.get('/', (req, res) => {
    res.send(homepage)
})   

//list of therapists
app.get('/therapists', async (req, res) => {
    const allTherapists = await Therapist.find({});
    res.render('allTherapists.ejs', {allTherapists});
})

app.get('/therapists/:id', async (req, res) => {
    const {id} = req.params;
    therapistData = await Therapist.findById(id);
    console.log(therapistData);
    res.render('therapistPage.ejs', {therapistData});
})

app.listen(3000, () => {
    console.log('listening on port 3000')
});

