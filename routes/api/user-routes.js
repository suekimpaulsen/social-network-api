const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
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
  .put(updateUser)
  .delete(deleteUser);

// at /api/users/<userId>/friends/<friendsId>
router
  .route('/:id/friends/:friendsId')
  .post()
  .delete();

module.exports = router;
