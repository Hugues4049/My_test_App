const express = require('express');
const Card = require('../models/cards');
const axios = require('axios')

const URL = "http://localhost:8070"

exports.getAll = (req, res)=>{
  axios.get(URL + "/creditcards/getAll")
    .then(result => {
        res.status(result.status).send(result.data);
    })
    .catch(error => {
      res.status(error.response.status).send(error.response.data)
    })
};

exports.getBalance = (req, res)=>{
  axios.get(URL + "/creditcards/creditcard.balance")
    .then(result => {
        res.status(result.status).send(result.data);
    })
    .catch(error => {
      res.status(error.response.status).send(error.response.data)
    })
};

exports.pay = (req, res, next)=>{
  axios.post(URL + "/transactions/transaction.pay")
    .then(result => {
      console.log("je suis ici", req.body)
      if (req.body) {
        const voit = new Card(req.body)
        voit.save()
          .then((result) => res.json(result))
          .catch(next);
      } else {
          res.json({
            error: 'The input field is empty',
          });
      };
    });
};

module.exports = router;