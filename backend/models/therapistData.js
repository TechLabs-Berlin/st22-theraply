const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
    number: Number,
    name: String,
    gender: String,
    personal_therapy: Boolean,
    group_therapy: Boolean,
    language: String,
    therapy_type: String,
    expertise: String,
    payment: String,
    patients_type: String,
    address: String,
    zip_code: String,
    phone_number: String,
    email: String,
    website: String,
    call_time: String,
    barrier_free_access: Boolean
})

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;