var db = require('../db');
//connection
 
module.exports = {
  messages: {
    get: function (callback) {

      db.connection.query('SELECT * FROM messages', function (err, result) {
        if (err) { throw err; }
        callback(result);
      });
 
      //db.end();
    }, // a function which produces all the messages
    post: function (params, callback) {
      var stringQuery = 'INSERT INTO messages (text, userid, roomname) \
      VALUES (? , SELECT id FROM users where username=?)';
      db.connection.query(stringQuery, params, function(err, results) {
        if (err) { throw err; }
        callback(results);
      });
    }

  },

  users: {
    get: function(callback) {
      db.connection.query ('SELECT * FROM users', function (err, result) {
        if (err) { throw err; }
        callback(result);
      });
    },


    post: function(params, callback) {
      var stringQuery = 'INSERT INTO users (username) VALUES (?)';
      db.connection.query(stringQuery, params, function(err, result) {
        if (err) { throw err; }
        callback(result);
      });
    }

  }
};