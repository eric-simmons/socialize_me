const router = require('express').Router()
const thoughtController = require('../controllers/thoughtController')


router.post('/', thoughtController.createThought)
router.get('/', thoughtController.getThoughts)
router.get('/:id', thoughtController.getThought)
router.put('/update/:id', thoughtController.updateThought)
router.delete('/delete/:id', thoughtController.deleteThought)
router.put('/addReaction/:id', thoughtController.addReaction)
router.put('/deleteReaction/:id', thoughtController.deleteReaction)


module.exports = router