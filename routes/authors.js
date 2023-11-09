const express = require('express')
const route = express.Router()
const {
    getAuthors,
    getAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controller/AuthorController')

//route untuk menampilkan data
route.get('/', getAuthors)

//route untuk mengirim data
route.post('/', addAuthor)

route.get('/:id', getAuthor)

//route untuk memperbaharui/update data
route.put('/:id', updateAuthor)

//route untuk menghapus data
route.delete('/:id', deleteAuthor)

module.exports = route