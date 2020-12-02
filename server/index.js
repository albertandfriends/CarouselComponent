const express = require('express');

const path = require("path");

const db = require("../database/index.js");

const axios = require("axios");

const app = express();

const PORT = process.env.port || 3000;

var faker = require('faker');

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/', (req,res,next) => {
  next();
})


app.get('/api/trips/CarouselComponent/:id/reviews',(req,res,next) => {
  var id = req.params.id;
  db.connection.query(`SELECT reviewCount FROM attraction where attractionId = ${id}`,(err, results, fields) => {
    if(err) {
      throw err;
    } else {
      res.send(results);
    }
  })
});

app.get('/api/trips/CarouselComponent/:id/photos',(req,res,next) => {
// var newObj = {'photo': 1};
// res.send(newObj);
db.connection.query(`SELECT urlLink from images WHERE imageID in (1,2,3,4,5,6,7,8,9,10,11,12,13)`, (err, results, fields) => {
  if(err) {
    console.error('there is an error getting urls', err);
    throw err;
  } else {
    res.send(results);
  }
})
});

app.listen(PORT, () => {
  console.log('Listening on PORT', PORT);
})

module.exports = app;