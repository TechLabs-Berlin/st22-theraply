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

const t = new Therapist({
    name:'other test therapist',
    gender:'male',
})    
t.save().then(t => {
    console.log(t)
})
.catch( e => {
    console.log(e)
})