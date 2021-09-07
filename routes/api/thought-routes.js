const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
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
  .route('/:thoughtsId/reactions')
  .post();

// at /api/thoughts/<thoughtsId>/reactions/<reactionsId>
router
  .route('/:thoughtsId/reactions/:reactionsId')
  .delete();
module.exports = router;
