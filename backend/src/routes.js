const express = require('express')
const UserController = require('./controllers/UserController')
const NoticeController = require('./controllers/NoticeController')

const routes = express.Router()

//User routes
routes.post('/users', UserController.store)
routes.get('/users', UserController.index)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

//News routes
routes.post('/notices', NoticeController.store)
routes.get('/notices', NoticeController.index)
routes.put('/notices/:id', NoticeController.update)
routes.delete('/notices/:id', NoticeController.delete)


module.exports = routes