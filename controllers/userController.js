
const { User, Thought } = require('../models')


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
            .populate('thoughts')
            .populate('friends')
            res.json(user)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },

    getUser: async function (req, res) {
        try {
            const user = await User.findById(
                req.params.id)
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
                req.params.id,
                req.body,
                { new: true })
            res.json(updatedUser)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },
    deleteUser: async function (req, res) {
        try {
            //first find user by id delete all the thoughts assoiciated with them
            const user = await User.findById(req.params.id)
            //second delete all the thoughts assoiciated with them
            await Thought.deleteMany({
                _id: { $in: user.thoughts }
            })
            //lastly delete the user
            const deletedUser = await User.findByIdAndDelete(
                req.params.id,
                { new: true })
            res.json(deletedUser)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },
    addFriend: async function (req, res) {
        try {
            
            //find user whos friends list to update
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $addToSet: { friend: req.body.friend } },
                { new: true })
                console.log(updatedUser)
            res.json(updatedUser)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },
    deleteFriend: async function (req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $pull: { friends: { $eq: req.body.friend } } },
                { new: true })
            res.json(updatedUser)
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
}