const {Schema} = require('mongoose')

const ReactionSchema = new Schema({
    reactionBody: {
        type: String, 
        required: "Reaction Required",
        maxlength: 280
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    thoughtId: {
        type: Schema.Types.ObjectId, 
        ref: 'Thought'
    }

}, {
    toJSON: {
        virtuals: true
    }, 
    timestamps: true
})

module.exports = ReactionSchema