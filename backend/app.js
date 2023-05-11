require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
// const {readdirSync} = require('fs')
const incomeRouter = require("./routes/income");
const expenseRouter = require("./routes/expense");

const PORT = process.env.PORT; 

const app = express(); 

//middlewares
app.use(express.json());
app.use(cors());

//routes
// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.use("/api/v1/income", incomeRouter);
app.use("/api/v1/expense", expenseRouter);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();
