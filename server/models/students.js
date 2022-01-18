const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    place: { type: String, require: true }
})

module.exports=mongoose.model('student',studentSchema)