const router = require('express').Router()

const partyController = require('../controllers/partyController')

// funções
router
  .route('/parties')
  .post((req, res)=> partyController.create(req, res))

router
  .route('/parties')
  .get((req, res)=> partyController.getAll(req, res))

router
  .route('/parties/:id')
  .get((req, res)=> partyController.getOne(req, res))

router
  .route('/parties/:id')
  .delete((req, res)=> partyController.deleteOne(req, res))

router
  .route('/parties/:id')
  .put((req, res)=> partyController.updateOne(req, res))

module.exports = router