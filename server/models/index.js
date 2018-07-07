var db = require('../db');
//connection
 
module.exports = {
  messages: {
    get: function () {
      console.log('REACHED GET!');
      var query = db.query('SELECT messages');
      query.on('fields', function(fields) {
        console.log(fields);
      });
 
      query.on('result', function(row) {
        console.log(row.post_title);
      });
 
      db.end();
    }, // a function which produces all the messages
     post: function (message) {
    //   var sql = `INSERT INTO messages (text, objectID, createdAt, updatedAt, id_room, id_user) VALUES (${data.text}, ${data.objectId}, ${}, ${}, ${};
    //   console.log('POST!');
      
  //   } // a function which can be used to insert a message into the database
    },

//   users: {
//     // Ditto as above.
//     get: function () {
//     },
//     post: function () {
//     }
//   }
  }
}
