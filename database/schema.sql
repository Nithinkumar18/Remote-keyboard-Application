
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNIQUE NOT NULL
);

CREATE TABLE keyboard (
    id INT PRIMARY KEY AUTO_INCREMENT,
    key_number INT NOT NULL,
    state ENUM('off', 'user1', 'user2') DEFAULT 'off'
);

CREATE TABLE control (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT, 
    acquired_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);