const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

const db = mongoose.connection;
db.on("error", function(error) {
  console.log("Database Error:", error);
});

db.once("open", () => {
  console.log("Database connected")
})
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/websiteDB"

mongoose.connect(MONGODB_URI);
  

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
