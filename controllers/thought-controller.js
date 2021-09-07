const { Thought, User } = require('../models');

const thoughtController = {
  // GET all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
          .select('-__v')
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
  },

  // GET one thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
          .select('-__v')
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No thought with this id' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
  },

  // CREATE new thought -- POST
  createThought({ params, body }, res) {
    Thought.create(body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(400).json({ message: 'No user found with this id' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
  },

  // UPDATE thought by id -- PUT
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(400).json({ message: 'No thought found with this id' });
              return;
            }
            res.json(dbThoughtData)
          })
          .catch(err => res.json(err));
  },
  
  // DELETE thought by id -- DELETE
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
          .then(deletedThought => {
            if (!deletedThought) {
              return res.status(400).json({ message: 'No thought with this id' });
            }
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $pull: { thoughts: params.thoughtId } },
              { new: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
  }


  // create new reaction for thought
  // delete reaction from thought
};

module.exports = thoughtController;