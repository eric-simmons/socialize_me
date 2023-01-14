const router = require('express').Router()

const {
    createUser,
    getUser, 
    getUsers, 
    updateUser,
    deleteUser,
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser)

module.exports = router