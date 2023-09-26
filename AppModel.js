const mongoose = require('mongoose')
const appShema = new mongoose.Schema({
    title: {
    type: String,
    required: true
    },
    description: {
        type: String
        },
    image: {
        type: String
        }
})

module.exports= mongoose.model("FamilyApp", appShema)