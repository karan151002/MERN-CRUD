const express = require('express')
const { postUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController')
const router = express.Router()

router.post('/create', postUser)
router.get('/get', getUsers)
router.get('/get/:id', getUser)
router.put('/edit/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router