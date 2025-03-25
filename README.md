# Remote-keyboard-Application
This application allows two users to share a 2x5 grid-based keyboard where they can toggle keys on (red for User 1, yellow for User 2) or off (white) by clicking. Users must acquire control of the keyboard to interact, and only one user can have control at a time. 


## SETUP
# Clone the project
clone this project using the following URL 
https://github.com/Nithinkumar18/Remote-keyboard-Application.git

# Database configurations
In the db.js file use your username and password to connect to the database 

=> Open MySQL WorkBench or Connect through terminal
   mysql -u root -p

=> Create Database
   CREATE DATABASE remote_keyboard_game;

=> Import Schema
   -> In MySQL workbench SELECT File click on Open SQL Script then choose .sql file from your system.
   -> The above step imports all the query for creating tables in workbench upon executing them it creates tables.

=> Verfiy Tables
   -> You can verify by running below query to view all tables;
   -> SHOW TABLES;


# Backend Setup
Move to the backend directory in the terminal and run the following command

npm i OR npm install

The above step installs all the required dependencies by adding package-lock.json file and node_modules folder.

now execute below command to run the server

=> node server // starts the server on the port 3000 and initializes the database connection

# Frontend Setup
Run the index.html file in the browser


