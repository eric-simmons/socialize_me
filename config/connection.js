const mongoose = require('mongoose')

//if mongodb uri use that(for heroku) if not use local connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shelterDB')

module.exports = mongoose.connection