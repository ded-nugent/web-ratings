const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
    title: { type: String, required: true },
    summary: String,
    thumbnail: String,
    URL: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    rating: 0,
    visits: 0,
    comments: [ 
        {
            user: { type: String, required: true },
            comment: String,
            dateCreated: { type: Date, default: Date.now }
        }
    ]
});

const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;
