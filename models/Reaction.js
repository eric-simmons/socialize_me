const { Schema, mongoose} = require('mongoose')


const ReactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: "A reaction is required",
        maxlength: 280
    },
    username: {
        type: String,
        required: "Username"
    }
}, {
    toJSON: {
        getters: true
    },
    timestamps: true
})



//getter method to format timestamp on query

const Reaction = mongoose.model('reaction', ReactionSchema)

module.exports = Reaction