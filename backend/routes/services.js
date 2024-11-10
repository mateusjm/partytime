const router = require('express').Router()

const serviceController = require('../controllers/serviceController')

// funções
router
  .route('/services')
  .post((req, res)=> serviceController.create(req, res))

router
  .route('/services')
  .get((req, res)=> serviceController.getAll(req, res))

router
  .route('/services/:id')
  .get((req, res)=> serviceController.getOne(req, res))

router
  .route('/services/:id')
  .delete((req, res)=> serviceController.deleteOne(req, res))

router
  .route('/services/:id')
  .put((req, res)=> serviceController.updateOne(req, res))

module.exports = router