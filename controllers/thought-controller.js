const { Thought, User } = require('../models');

const thoughtController = {
  // GET all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
  }
  // GET one thought by id
  // CREATE new thought -- POST
  // UPDATE thought by id -- PUT
  // DELETE thought by id -- DELETE

  // create new reaction for thought
  // delete reaction from thought
};

module.exports = thoughtController;