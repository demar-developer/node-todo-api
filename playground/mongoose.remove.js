const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

//Todo.findOneAndRemove

Todo.findByIdAndRemove('58b79dcf9cdb73bc2753dc16').then((todo) => {
  console.log(todo);
});