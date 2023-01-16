const router = require('express').Router()
const userController = require('../controllers/userController')




router.post('/', userController.createUser)
router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.put('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)
router.put('/addFriend/:id', userController.addFriend)
router.put('/deleteFriend/:id', userController.deleteFriend)



module.exports = router