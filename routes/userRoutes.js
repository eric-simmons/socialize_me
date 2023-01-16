const router = require('express').Router()


const {
    createUser,
    getUser, 
    getUsers, 
    updateUser,
    deleteUser,
} = require('../controllers/userController.js')

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getUser).delete(deleteUser).put(updateUser)

module.exports = router