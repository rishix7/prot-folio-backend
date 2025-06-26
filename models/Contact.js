const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Removes whitespace from both ends of a string
    },
    email: {
        type: String,
        required: true,
        unique: false, // Emails don't necessarily need to be unique for contact forms
        trim: true,
        lowercase: true, // Stores the email in lowercase
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', contactSchema);