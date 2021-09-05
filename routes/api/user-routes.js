const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser
} = require('../../controllers/user-controller');

// at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put()
  .delete();

// at /api/users/<userId>/<friendsId>

module.exports = router;
