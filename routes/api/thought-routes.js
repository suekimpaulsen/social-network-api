const router = require('express').Router();
const {
  getAllThoughts
} = require('../../controllers/thought-controller');

// at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)

// at /api/thoughts/<userId>
router
  .route('/:userId')
  .post();

// at /api/thoughts/<userId>/<thoughtsId>
router
  .route('/:userId/:thoughtsId')
  .put()
  .delete();

// // add reaction
// router
//   .route('/:thoughtsId/reactions')
//   .put();
// // delete reaction
// router
//   .route('/:thoughtsId/reactions/:reactionsId')
//   .delete();

module.exports = router;
