const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./user.model');
db.publisher = require('./publisher.model');

db.ROLES = ['user', 'admin', 'moderator'];

module.exports = db;
