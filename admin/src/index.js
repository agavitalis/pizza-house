import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;
const DB = process.env.DB_URL
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json({ type: "application/json" }));
app.use(cors());

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", console.error.bind(console, "connection error:"));


const routes = require("./routes/api.js");
app.use('/api/v1/',routes);

app.listen(PORT,(error) => {
  console.log(`🍕pizza-house-admin-service, is listening on port ${PORT}`);

  if(error){
    console.log(error);
  }
})