const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  
// at /api/thoughts/<userId>
  router
  .route('/:userId')
  .post(createThought);

// at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  // .delete(deleteThought);

router
  .route('/:userId/:id')
  .delete(deleteThought);

// at /api/thoughts/<thoughtsId>/reactions
router
  .route('/:id/reactions')
  .post(createReaction);

// at /api/thoughts/<thoughtsId>/reactions/<reactionsId>
router
  .route('/:id/reactions/:reactionsId')
  .delete(deleteReaction);
module.exports = router;
