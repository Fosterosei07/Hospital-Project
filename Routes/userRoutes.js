const express = require('express')
const {home,about,contact,courses,trainers,events,pricing} = require('../Controller/userController')
const app = express.Router()

app.get('/',home)
app.get('/about',about)
app.get('/contact',contact)
app.get('/courses',courses)
app.get('/trainers',trainers)
app.get('/events',events)
app.get('/pricing',pricing)


module.exports=app

    