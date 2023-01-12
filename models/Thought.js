const { Schema, model, default: mongoose } = require('mongoose')


const ThoughtSchema = new Schema({
    firstName: {
        type: String,
        required: "first name is required",
        unique: true,
        trim: true,
    },})
 

const Thought = mongoose.model('Thought', ThoughtSchema)

module.exports = Thought