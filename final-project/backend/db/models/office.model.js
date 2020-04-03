const mongoose = require('mongoose');

const OfficeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    img: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    info: {
        type: String,
        required: true,
        minlength: 3
    }

})

const Office = mongoose.model('Office', OfficeSchema);

module.exports = { Office }