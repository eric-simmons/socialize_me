const { Schema, mongoose } = require('mongoose')
const ReactionSchema = require('./Reaction')
const formatDate = require('../utils/formatDate')


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: "A thought is required",
        minlength: 1,
        maxlength: 280
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reactions: [ReactionSchema]
}, {
    toJSON: {
        getters: true
    },
    timestamps: true
})


//getter method to format timestamp on query

//virtual reactionCount that gets length of reaction array on query
ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

ThoughtSchema.virtual('formatDate').get(formatDate)

const Thought = mongoose.model('Thought', ThoughtSchema)

module.exports = Thought