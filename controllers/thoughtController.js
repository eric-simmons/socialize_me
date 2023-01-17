
const { User, Thought } = require('../models')


module.exports = {

    createThought: async function (req, res) {

        try {
            const newThought = await Thought.create(req.body)
            await User.findByIdAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: newThought.id} }
            )
            res.json(newThought)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },

    getThoughts: async function (req, res) {
        try {
            const thoughts = await Thought.find()
            res.json(thoughts)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },

    getThought: async function (req, res) {
        try {
            const thought = await Thought.findById(
                req.params.id)
            res.json(thought)
        }
        catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    updateThought: async function (req, res) {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true })
            res.json(updatedThought)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },
    deleteThought: async function (req, res) {
        try {
            // // first find thought by id delete all the reactions assoiciated with them
            // const thought = await Thought.findById(req.params.id)
            // //second delete all the thoughts assoiciated with them
            // await Reaction.deleteMany({
            //     _id: { $in: thought.reaction }
            // })
            // lastly delete the thought
            const deletedThought = await Thought.findByIdAndDelete(
                req.params.id,
                { new: true })
            res.json(deletedThought)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },
    //create reaction stored in a single thoughts reactions array
    addReaction: async function (req, res) {
        try { 
            const reaction = await Thought.findByIdAndUpdate(
                {_id: req.params.id},
                {$push: {reaction: req.body}},
                {new: true}
            )
            res.json(reaction)
        }
        catch (error) {
            res.status(500).json(error)
        }
    },
    deleteReaction: async function (req, res) {
        try { }
        catch (error) {
            res.status(500).json(error)
        }
    }
}