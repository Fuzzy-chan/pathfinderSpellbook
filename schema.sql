### Schema

/* CREATE database mycle_db; */
USE mycle_db;

SELECT * FROM reviews;



/* CREATE TABLE locations
(
	id int NOT NULL AUTO_INCREMENT,
	locationName varchar(50) NOT NULL,
	category varchar(50) NOT NULL,
	description varchar(250) NOT NULL,
 	address varchar(250) NOT NULL,
 	picture_url varchar(250) NOT NULL,
 	likes int DEFAULT 0,
	PRIMARY KEY (id)
);
 

CREATE TABLE reviews
(
    id int NOT NULL AUTO_INCREMENT,
	locationId int,
	author varchar(50) DEFAULT "Guest",
	body varchar(250) NOT NULL,
    created_at DATE,
    PRIMARY KEY (id)
); */


