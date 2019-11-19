//ENTRY point for my application

const express = require("express");
const cors = require("cors");
const app = express();
// const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use("/api/videos", require("./routes/api/videos"));

// const PORT = process.env.PORT || 4000;

app.listen(5000, () => {
  console.log("listening");
});
