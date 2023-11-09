const mysql = require('mysql2')
const dbConfig = require('../config/database')
const pool = mysql.createPool(dbConfig)

const {
    responseNotFound,
    responseSuccess,
} = require('../traits/ApiResponse')


const getUsers = (req, res) => {
    const query = "SELECT * FROM users"

    pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query(query, (err, results) => {
            if(err) throw err
            
            responseSuccess(res, results, 'users succesfully fetched')
        })
        connection.release()
    })
}

const getUser = (req, res) => {
    const id = req.params.id
    
    const query = `SELECT * FROM users WHERE id=${id}`
    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query(query, (err, results) => {
            if(err) throw err

            if(results.length == 0){
                responseNotFound(res)
                return
            }
            responseSuccess(res,results,'users successfully fetched')
        })
        connection.release()
    })
}

const addUser = (req, res) => {
    const data = {
        nama: req.body.nama,
        email: req.body.email,
        alamat: req.body.alamat,
        umur: req.body.umur,
        media_social: req.body.media_social
    }
    const query = `INSERT INTO users SET ?`

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query(query, [data], (err, results) => {
            if(err) throw err
            responseSuccess(res, results, 'users successfully added')
        })

        connection.release()
    })
}

const updateUser = (req,res) => {
    const id = req.params.id

    const data = {
        nama: req.body.nama,
        email: req.body.email,
        alamat: req.body.alamat,
        umur: req.body.umur,
        media_social: req.body.media_social
    }

    const query = `UPDATE users SET ? WHERE id=${id}`
    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query(query, [data], (err,results) => {
            if(err) throw err

            if(results.affectedRows == 0){
                responseNotFound(res)
                return
            }
            responseSuccess(res,results, 'users succesfully updated')
        })
        connection.release()
    })
    
}

const deleteUser = (req,res)=>{
    const id = req.params.id

    const query = `DELETE FROM users WHERE id=${id}`

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query(query, (err, results) => {
            if(err) throw err

            if(results.affectedRows == 0){
                responseNotFound(res)
                return
            }
            responseSuccess(res,results, 'users succesfully deleted')
        })
        connection.release()
    })
}
module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}