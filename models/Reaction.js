const { Schema, model, default: mongoose, now } = require('mongoose')


const ReactionSchema = new Schema({
reactionBody: {
        type: String,
        required: "A reaction is required",
        maxlength: 280
    },
    username:{
        type: String,
        required: "Username"
    },
    createdAt: {
        Date: now
    }
},{
    timestamps:true
})


const Reaction = mongoose.model('reaction', ReactionSchema)

module.exports = Reaction