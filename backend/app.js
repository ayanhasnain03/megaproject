const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser"); 
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middlewares/error");

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles:true
}));
// Route Imports
const user = require("./routes/userRoute");
const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//Middleware for Error
app.use(errorMiddleware);

module.exports = app;