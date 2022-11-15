const express = require("express");
const DB = require("./db/db");

const app = express();
const db = new DB();

app.use(express.json());

app.get("/quotes", async (req, res) => {
  try{
    let quotes = await db.readAll();
    res.json(quotes);
  } catch (e) {
    console.error(e.message);
    //send status sends the string representation of the status code as the body
    res.sendStatus(500).end();
  }
});

app.post("/quote", async (req, res) => {
  if (req.body.quote && req.body.author){
    try{
      let quote = {quote: req.body.quote, author: req.body.author};
      await db.create(quote);
      res.status(201).send("Quote added");
    } catch (e) {
      console.error(e.message);
      res.sendStatus(500).end();
    }
  } else {
    res.sendStatus(400).end();
  }
});

app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;