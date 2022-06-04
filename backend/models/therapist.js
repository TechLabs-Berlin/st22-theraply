const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: String,
    address: String,
    rating: Number,
    email: String
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;