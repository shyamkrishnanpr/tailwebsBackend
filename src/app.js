import express from "express";

import db from "./db.js";


import dotenv from "dotenv";


dotenv.config();
db()

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors());

// app.use("/", router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
