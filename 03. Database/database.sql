DROP DATABASE IF EXISTS theater-robehuuse;
CREATE DATABASE theater-robehuuse;
USE theater-robehuuse;

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `prename` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `roleID` VARCHAR(255) NOT NULL,
    `restoreToken` VARCHAR(255)
);

CREATE TABLE `roles` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role` VARCHAR(255) NOT NULL
);

CREATE TABLE `tickets` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    `date` DATE NOT NULL,
    `time` TIME NOT NULL,
    `buytime` TIMESTAMP NOT NULL
);

CREATE TABLE `defaultTicket` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    `possibleDates` VARCHAR(255) NOT NULL
);

CREATE TABLE `defaultSeats` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `seatNr` INT NOT NULL,
    `available` BOOLEAN NOT NULL
);

CREATE TABLE `dinnerSeats` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `seatNr` INT NOT NULL,
    `available` BOOLEAN NOT NULL
);

CREATE TABLE `user_tickets` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userID` INT NOT NULL,
    `ticketID` INT NOT NULL,
    `quantity` INT NOT NULL
);

CREATE TABLE `seat_tickets` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `seatID` INT NOT NULL,
    `ticketID` INT NOT NULL
);

/* Insert default roles: administrator, member, user, sale */
INSERT INTO `roles` (`role`) VALUES ('administrator');
INSERT INTO `roles` (`role`) VALUES ('member');
INSERT INTO `roles` (`role`) VALUES ('user');
INSERT INTO `roles` (`role`) VALUES ('sale');

/* Insert default ticket */
INSERT INTO `defaultTicket` (`name`, `description`, `price`, `possibleDates`) VALUES ('D Bäsehäx', 'Ein Ticket', 10.00, '2021-12-31');