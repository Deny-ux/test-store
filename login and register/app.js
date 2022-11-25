const express = require("express");
const connectDB = require("./utils/connectDB");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
// routes
const productRouter = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");
// app.use(express.static(__dirname + "/public"));
//middleware
app.use(express.static("./public"));
app.use(express.json());
app.use("/products", productRouter);
app.use("/auth", authRouter);

app.listen(port, async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`Listening on port ${port}...`);
  } catch (error) {
    console.log(error);
  }
});
