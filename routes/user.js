const express = require('express')
const route = express.Router()
const {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
} = require('../controller/UserController')

//route untuk menampilkan data
route.get('/', getUsers)

//route untuk mengirim data
route.post('/', addUser)

route.get('/:id', getUser)

//route untuk memperbaharui/update data
route.put('/:id', updateUser)

//route untuk menghapus data
route.delete('/:id', deleteUser)

module.exports = route