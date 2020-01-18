const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: String,
    comment: String,
    dateCreated: { type: Date, default: Date.now }
})

const weblistSchema = new Schema({
    title: String,
    summary: String,
    thumbnail: String,
    URL: String,
    category: String,
    date: { type: Date, default: Date.now },
    rating: Number,
    visits:Number,
    comments: [{
        type: commentSchema,
        required: false
    }]
})

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
    websites:[{
        type: weblistSchema,
        required: false
    }]
});


const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;
