const {Schema} = require('mongoose')

const ReactionSchema = new Schema({
    reactionBody: {
        type: String, 
        required: "Reaction Required",
        maxlength: 280
    },
    username: {
        type: String, 
        required: "User required for reaction"
    }
}, {
    toJSON: {
        virtuals: true
    }, 
    timestamps: true
})

module.exports = ReactionSchema