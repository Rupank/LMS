const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseID: String,
    courseName: String,
    courseDuration: Number,
    coursePrice: Number
})

module.exports = mongoose.model('Course', courseSchema);