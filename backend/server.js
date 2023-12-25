const app = require("./app");
const dotenv = require("dotenv").config({path:"backend/config.env"})
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