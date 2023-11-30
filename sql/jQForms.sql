CREATE DATABASE registration;

USE registration;

CREATE TABLE users (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  address VARCHAR(100) NOT NULL,
  phone BIGINT(10) UNSIGNED NOT NULL,
  gender ENUM('M', 'F'),
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);