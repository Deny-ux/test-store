// imports
const express = require("express");
const connectDB = require("./utils/connectDB");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const app = express();
require("dotenv").config();
require("express-async-errors");
const port = process.env.PORT || 3000;
// routes
const productRouter = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");

//middleware
// app.use(express.static(__dirname + "/public"));
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);

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
