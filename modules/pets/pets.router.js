const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/cats', (req, res) => {
  // Return all pets currently up for adoption.
  const { nextCat } = Pets.get()
  return res.status(200).json({ nextCat })
})

router.get('/dogs', (req, res) => {
  // Return all pets currently up for adoption.
  const { nextDog } = Pets.get();
  return res.status(200).json({ nextDog })
})

router.delete('/api/cat', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.dequeue('cat');
  return res.status(201).end();
})

router.delete('/api/dog', json, (req, res) => {
  // Remove a pet from adoption.
  Pets.dequeue('dog');
  return res.status(201).end();
})

module.exports = router
