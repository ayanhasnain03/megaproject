const express = require("express")
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser())
app.use(express.json())

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute")

app.use("/api/v1", product);
app.use("/api/v1", user);

//Middleware for Error
app.use(errorMiddleware);

module.exports = app;