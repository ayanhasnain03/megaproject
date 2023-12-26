const app = require("./app");
const dotenv = require("dotenv").config({path:"backend/config.env"})
const cloudinary = require("cloudinary").v2;
const connectDatabase = require("./config/conn");
const port = process.env.PORT || 8080;
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Handling Uncaught Exception `);
  process.exit(1);
});
//Conecting to Database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(port, () => {
  console.log(`server run on ${process.env.port}`);
});
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
 console.log(`Shutting down the server due to Unhandled Promise Rejection`);
server.close(() => {
 process.exit(1);
    });
  })