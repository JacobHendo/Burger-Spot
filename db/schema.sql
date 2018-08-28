#Create the `burgers_db`.


CREATE DATABASE burgers_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(25) NOT NULL,
	devoured BOOLEAN DEFAULT false
);
   