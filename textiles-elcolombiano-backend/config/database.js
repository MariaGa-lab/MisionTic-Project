const mongoose = require('mongoose');

const URI =  'mongodb://localhost/dbtextiles';

mongoose.connect(URI)
  .then(db => console.log('Database is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
