const { ObjectId } = require('mongoose').Types
const { User, Thought, Reaction } = require('../models')

module.exports = {

    createUser: async function (req, res) {
        try {
            const newUser = await User.create(req.body)
            res.json(newUser)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },

    getUsers: async function (req, res) {
        try {
            const user = await User.find()
            res.json(user)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },

    getUser: async function (req, res) {
        try {
            const user = await User.findOne(
                { _id: req.params.userId },
                { new: true })
            res.json(user)
        }
        catch (error) {
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
//delete assocaited thoughts when user is deleted
}