const app = require("./app");
const dotenv = require("dotenv")
const connectDatabase = require("./db/Database");
const port = process.env.PORT || 8000;

console.log(process.env.PORT)
// Exception handling
process.on("uncaughtException", (err) => {
  console.log(`error: ${err}`);
  console.error('Shuting down server for uncaught exception');
});

// Config
if (process.env.NODE_ENV !== 'production') {
dotenv.config();
}
// dotenv.config();

//connect DB
connectDatabase();

// Server creation
const server = app.listen(port, () => {
  console.log(`server listening on port ${port}`);
  
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`shutting down server for ${err.message}`);
  console.log(`shutting down server for unhandled promise rejection`);
  

  server.close(() => {
    process.exit(1);
  })
})