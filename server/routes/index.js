const express = require('express')
const router = express.Router()

const heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

router.get('/', (req, res) => {
  res.status(200).json({text:'Hello World'});
})

router.get('/heroes', (req, res) => {
  res.json(heroes);
})

router.get('/heroes/:id', (req, res) => {
  const id = req.params.id
  if (id) {
    const found = heroes.find(item => item.id == id)
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(404).json({text: 'no found'});
    }
  } else {
    res.status(200).json(heroes);
  }
})

module.exports = router