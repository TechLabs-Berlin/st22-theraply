const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/theraply');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const homepage = app.use(express.static('home_page'))

//example of the dataset of therapists. To be changed later.
// const therapistArray = [
//     {
//         id: uuidv4(),
//         name: 'Peter',
//         rating: '3.5'
//     },
//     {
//         id: uuidv4(),
//         name: 'Valerie',
//         rating: '4.0'
//     },
//     {
//         id: uuidv4(),
//         name: 'Claire',
//         rating: '4.5'
//     }
// ]

//homepage
app.get('/', (req, res) => {
    res.send(homepage)
})

// //List of Therapists
// app.get('/therapists', (req, res) => {
//     res.render('allTherapists', {therapistArray:therapistArray})
// })

// //therapist's sites
// app.get('/therapists/:id', (req, res) => {
//     const {id} = req.params;
//     const thisTherapist = therapistArray.find(t => t.id === id);
//     res.render('therapists', {thisTherapist:thisTherapist})
// })

app.listen(3000, () => {
    console.log('listening on port 3000')
});



