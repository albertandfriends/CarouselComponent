const express = require('express');

const path = require("path");

const db = require("../database/index.js");

const axios = require("axios");

const app = express();

const PORT = 3000;

var faker = require('faker');

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/api/trips/:id/reviews',(req,res,next) => {
  console.log('params',req.params.id);
  var id = req.params.id;
  db.connection.query(`SELECT reviewCount FROM attraction where attractionId = ${id}`,(err, results, fields) => {
    if(err) {
      throw err;
    } else {
      console.log('results sent back');
      res.send(results);
    }
  })
});

app.get('/api/trips/:id/photos',(req,res,next) => {

});

app.listen(PORT, () => {
  console.log('Listening on PORT', PORT);
})