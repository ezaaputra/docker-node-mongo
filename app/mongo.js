const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || "mongodb://mongo:27017/school", { useNewUrlParser: true, useUnifiedTopology: true })

const Student = mongoose.model('students', {
  name: String,
  age: Number,
  gender: String,
}, 'students');

module.exports = {
  Student
};