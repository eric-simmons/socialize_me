const { Schema, model, default: mongoose } = require('mongoose')


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: "A thought is required",
        maxlength: 280
    },
}, {
    timestamps: true
})


const Thought = mongoose.model('Thought', ThoughtSchema)

module.exports = Thought