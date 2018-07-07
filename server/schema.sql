DROP DATABASE IF EXISTS chat; 
CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(5000)
);


CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(5000)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, text VARCHAR(5000), objectID VARCHAR(100), createdAt DATETIME, updatedAt DATETIME, id_room INT NOT NULL, id_user INT NOT NULL, FOREIGN KEY(id_room) REFERENCES rooms(id), 
  FOREIGN KEY(id_user) REFERENCES users(id)
);

CREATE TABLE relationships (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, id_user1 INT NOT NULL, id_user2 INT NOT NULL, FOREIGN KEY(id_user1) REFERENCES users(id), FOREIGN KEY(id_user2) REFERENCES users(id)
);

SELECT * FROM messages;

SELECT * FROM rooms;

SELECT * FROM users;

SELECT * FROM relationships; 

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

