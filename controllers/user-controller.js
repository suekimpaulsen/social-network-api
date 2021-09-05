const { User } = require('../models');

const userController = {
  // GET all users -- GET
  getAllUsers(req, res) {
    User.find({})
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
  },
  // Get user by id -- GET
  // getUserById({ params }, res) {
  //   User.findOne({ _id: params.id })
  // }
  // CREATE new user -- POST
  // UPDATE user by id -- PUT
  // DELETE user by id -- DELETE

  // add friend
  // delete friend
}

module.exports = userController;