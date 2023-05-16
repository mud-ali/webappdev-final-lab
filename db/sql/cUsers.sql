CREATE TABLE webapp_9MF_mudali25.users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(60) NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NULL,
    user_email VARCHAR(80) NOT NULL,
    pwd_hash VARCHAR(255) NOT NULL,
    user_created DATETIME NOT NULL,
    user_elo INT NOT NULL,
    PRIMARY KEY (user_id)
);