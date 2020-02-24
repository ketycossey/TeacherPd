const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://teacherpd:teacherpd@cluster0-j6g6b.mongodb.net/test?retryWrites=true&w=majority"
);
mongoose.connection
  .once("open", () => {
    console.log("Conection has been made!");
  })
  .on("error", function(error) {
    console.log("Error is: ", error);
  });

const pdsRouter = require("./routes/pds");
const usersRouter = require("./routes/users");

app.use("/pds", pdsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
