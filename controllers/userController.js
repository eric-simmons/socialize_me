
const { User } = require('../models')

module.exports = {

    createUser: async function (req, res) {
        console.log(req.body)
        try {
            const newUser = await User.create(req.body)
            res.json(newUser)
        }
        catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },

    getUsers: async function (req, res) {
        try {
            const user = await User.find()
            // .populate('Thought')
            res.json(user)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },

    getUser: async function (req, res) {
        //_id
        try {
            const user = await User.findById(
                { _id: req.params.id })
            res.json(user)
        }
        catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    updateUser: async function (req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: req.params.userId },
                { new: true })
            res.json(updatedUser)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },
    deleteUser: async function (req, res) {
        try {
            const deletedUser = await User.findByIdAndDelete(
                { _id: req.params.userId },
                { new: true })
            res.json(deletedUser)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },
    //delete associated thoughts when user is deleted
}