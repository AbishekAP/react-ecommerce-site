const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((con) => {
    console.log(`Database connected on ${con.connection.host}`);
    }).catch(()=>{
        console.log(`Error on Database connectivity`);
        setTimeout(() => {
          connectDatabase();
        }, 10000);})};
module.exports = connectDatabase;
