require('dotenv').config()
const express = require('express')
const moment = require('moment')

const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 5001
const { Student } = require('./mongo')

// fix unable to post data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// load balancer implementation
app.get('/', (req, res) => {
  res.send(`Node App Sample By Eza!!! Port: ${port}`)
})
app.get('/iphash', (req, res) => {
  res.send(`Node App Sample By Eza!!! Port: ${port}`)
})
app.get('/leastconn', (req, res) => {
  res.send(`Node App Sample By Eza!!! Port: ${port}`)
})

// mongo, cache, log, rate limiter implementation
app.get('/student', async (req, res) => {
  try {
    const student = await Student.find()
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
    const data = {
      "description": "Students' Data.",
      student,
      "port_used": port,
      timestamp
    }
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
  }
})
app.post('/student', async (req, res) => {
  const newStudent = new Student(req.body)
  try {
    const savedStudent = await newStudent.save()
    res.status(200).send(`${savedStudent.name} 🎓 added!`)
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})