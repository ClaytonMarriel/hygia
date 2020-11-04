//Inicializando o servidor
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://CRUD:31374004@cluster0.pq4cm.mongodb.net/test')
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000);