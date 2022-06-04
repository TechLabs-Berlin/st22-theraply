const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Therapist = require('./models/therapist.js');

mongoose.connect('mongodb://localhost:27017/therapists', {useNewUrlParser: true})
    .then(()=> {
    console.log('Mongo CONNECTION OPEN')
    })
    .catch(err => {
    console.log('Mongo Connection ERROR')
    console.log(err)
    })

const homepage = app.use(express.static('../home page'))

//homepage
app.get('/', (req, res) => {
    res.send(homepage)
})
//List of Therapists
app.get('/therapists', async(req,res) => {
    const therapists = await Therapist.find({});
    console.log(therapists);
    res.send('therapists')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
});




// //therapist's sites
// app.get('/therapists/:id', (req, res) => {
//     const {id} = req.params;
//     const thisTherapist = therapistArray.find(t => t.id === id);
//     res.render('therapists', {thisTherapist:thisTherapist})
// })
