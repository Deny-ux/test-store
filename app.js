// imports
const express = require("express");
const connectDB = require("./utils/connectDB");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const authenticateUser = require("./middleware/authentication");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
require("dotenv").config();
require("express-async-errors");
const app = express();
// routes
const productRouter = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");
const profileRouter = require("./routes/profileRoutes");
// const profileRouter = require("./routes/");

//middleware
app.use(fileUpload({ useTempFiles: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);
// app.use("/profile", authenticateUser, (req, res) => {
//   res.sendFile(__dirname + "/public/profile.html");
// });
app.use("/profile", authenticateUser, profileRouter);

// not found
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// end of middleware

// start server
const port = process.env.PORT || 3000;
app.listen(port, async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`Listening on port ${port}...`);
  } catch (error) {
    console.log(error);
  }
});
