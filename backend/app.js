const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });
const connectDatabase = require("./config/connectDatabase");
connectDatabase();

const products = require("./routes/products");
const orders = require("./routes/orders");
const userRegister= require('./routes/userRegister')
const userLogin= require('./routes/userLogin')
const carts= require('./routes/carts')

app.use(express.json());
app.use(cors());

app.use("/api/v1", products);
app.use("/api/v1", orders);
app.use('/api/v1/',userRegister);
app.use('/api/v1/',userLogin);
app.use('/api/v1/',carts);

app.listen(process.env.PORT, () => {
  console.log(
    `server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
