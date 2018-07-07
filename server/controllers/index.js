var models = require('../models');
var utils = require('./utils');
//models.get
//models.post 
var objectIdCounter = 1; 

module.exports = {
  messages: {
    get: function (req, res) {
      var messagesFromSql = models.messages.get(); 
      utils.sendResponse(res, JSON.parse(messagesFromSql), 200); 
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      utils.collectData(req, (message) => {
        message.objectId = ++objectIdCounter; 
        models.messages.post(message); 
        utils.sendResponse(res, message, 201);
      }); 
    // callback function is required given node's asynchronous nature
    // a function which handles posting a message to the database
    },
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

