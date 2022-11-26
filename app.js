// imports
const express = require("express");
const connectDB = require("./utils/connectDB");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const authenticateUser = require("./middleware/authentication");

const app = express();
require("dotenv").config();
require("express-async-errors");
const port = process.env.PORT || 3000;
// routes
const productRouter = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");
// const profileRouter = require("./routes/");

//middleware
// app.use(express.static(__dirname + "/public"));
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);
app.use("/profile", authenticateUser, (req, res) => {
  res.sendFile(__dirname + "/public/profile.html");
});
// not found
app.use((req, res) => {
  return res.status(404).sendFile(__dirname + "/public/notExist.html");
});
app.use(errorHandlerMiddleware);
// end of middleware

// start server
app.listen(port, async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`Listening on port ${port}...`);
  } catch (error) {
    console.log(error);
  }
});
