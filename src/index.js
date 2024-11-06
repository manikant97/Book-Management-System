const express = require("express");
const mongoose = require('mongoose');
const route = require("./routes/route");
const app = express();
app.use(express.json());

require("dotenv").config();


mongoose
  .connect(process.env.URL, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT, () => {
  console.log("App is running at port " + process.env.PORT);
});