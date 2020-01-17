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
        title: { type: String, required: true },
        summary: String,
        thumbnail: String,
        URL: { type: String, required: true },
        category: { type: String, required: true },
        date: { type: Date, default: Date.now },
        rating: Number,
        visits:Number,
        comments: [ 
            {
                user: { type: String, required: true },
                comment: String,
                dateCreated: { type: Date, default: Date.now }
            }
            ]
        }
    ]
});

const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;
