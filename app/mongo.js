const mongoose = require('mongoose');
const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

const Student = mongoose.model('students', {
  name: String,
  age: Number,
  gender: String,
}, 'students');

module.exports = {
  Student
};

// if you want to connect without auth simply change the mongoUrl to
// "mongodb://mongo:27017/school"