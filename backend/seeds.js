const Therapist = require('./models/therapistData.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/theraplyDB')
    .then(()=>{
        console.log('Mongo Connection Open')
    })
    .catch(err => {
        console.log('Mongo connection error')
        console.log(err)
    })

const fs = require('fs')
const csv = require('fast-csv');
const therapistArray = []
    
fs.createReadStream('../list of therapists and other info.csv')
.pipe(csv.parse({ headers: true, delimiter: ';' }))
.on('error', error => console.error(error))
.on('data', row => therapistArray.push(row))
//.on('end', () => console.log(therapistArray));

setTimeout(fillDb, 1000);

function fillDb(){
    for (let item of therapistArray){
        var thisTherapist = new Therapist({
            number: item.Number,
            name: item.Name,
            gender: item.Gender,
            // personal_therapy: item[3],
            // group_therapy: item[4],
            language: item.Language,
            // therapy_type: item[6],
            expertise: item.Expertise,
            // payment: item[8],
            // patients_type: item[9],
            address: item.Address,
            // zip_code: item[11],
            // phone_number: item[12],
            email: item.Email,
            website: item.website,
            // call_time: item[15],
            // barrier_free_access:item[16] 
            });
        thisTherapist.save()
    }
}

// setTimeout(() => {
//     var test = therapistArray[1];
//     console.log(test.Name)
//   }, "1000")
