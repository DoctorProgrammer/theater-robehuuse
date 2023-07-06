DROP DATABASE IF EXISTS theater_robehuuse_database;
CREATE DATABASE theater_robehuuse_database;
USE theater_robehuuse_database;

CREATE TABLE user (
	`userID` INTEGER AUTO_INCREMENT, PRIMARY KEY (userID), 
    `vorname` VARCHAR(255) NOT NULL
);

INSERT INTO `user` (`vorname`) VALUES ("Robin");
INSERT INTO `user` (`vorname`) VALUES ("Nicola");