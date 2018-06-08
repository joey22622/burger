DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    photo VARCHAR(9000),
    PRIMARY KEY(id)
);

SELECT * FROM burgers;


