const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");


const PORT = process.env.PORT || 3001;

// app.use ((req,res)=>{
//   // console.log(req)
// })
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// api routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sportadventures",
{ useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false });

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
