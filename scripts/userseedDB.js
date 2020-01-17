const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://localhost/websiteDB"
  );

const userSeed = [
    {
        username : "USER1",
        email : "email123@email.com",
        password : "PASSWORD"
    },
    {
        username : "USER2",
        email : "email@email.com",
        password : "PASSWORD"
    }
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});