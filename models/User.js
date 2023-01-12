const { Schema, model, default: mongoose } = require('mongoose')


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: "first name is required",
        unique: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: "first name is required",
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: "Email is required",
        validateEmail: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please use a valid Email']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
            trim: true,
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
},
    //whenever i convert documents to JSON i want all virtual fields included
    {
        toJSON: {
            virtuals: true
        }
    })
UserSchema.virtual('friendCount')
    .get(function() {
        return this.friends.length
    })

UserSchema.virtual('fullName')
    .get(function () {
        return `${this.firstName} ${this.lastName}`
    })
    .set(function (value) {
        const [firstName, lastName] = value.split(' ')
        this.set({ firstName, lastName })
    })







// UserSchema.methods.validateEmail = async (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         )
// }

const User = mongoose.model('User', UserSchema)

module.exports = User