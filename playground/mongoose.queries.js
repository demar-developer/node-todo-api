const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58b50a4c48ae05204e6b3232';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

