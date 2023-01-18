const { DateTime } = require("luxon")

module.exports = function () {
    //stringify createdAt object, them remove double quotes, format with luxon
    let timestamp = JSON.stringify(this.createdAt)
    timestamp = timestamp.replace(/['"]+/g, '')
    return DateTime.fromISO(timestamp).toFormat('ff')
}