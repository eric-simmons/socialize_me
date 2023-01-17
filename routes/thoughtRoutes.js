const router = require('express').Router()
const thoughtController = require('../controllers/thoughtController')


router.post('/', thoughtController.createThought)
router.get('/', thoughtController.getThoughts)
router.get('/:id', thoughtController.getThought)
router.put('/update/:id', thoughtController.updateThought)
router.delete('/delete/:id', thoughtController.deleteThought)
router.put('/createReaction/:id', thoughtController.createReaction)
router.put('/deleteReaction/:id', thoughtController.deleteReaction)


module.exports = router