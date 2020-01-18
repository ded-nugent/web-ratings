const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        min: [6, "must be at least 6 characters"],
        max: 25
    },
	password : {
        type: String,
        required: true,
        min: [6, "must be at least 6 characters"],
        max: 25
    },
    websites:[
        {
        title: String,
        summary: String,
        thumbnail: String,
        URL: String,
        category: String,
        date: { type: Date, default: Date.now },
        rating: Number,
        visits:Number,
        comments: [ 
            {
                user: String,
                comment: String,
                dateCreated: { type: Date, default: Date.now }
            }
            ]
        }
    ]
});

const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;
