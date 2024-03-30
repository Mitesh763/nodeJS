USE delta_app;

CREATE TABLE users_1(
    id VARCHAR(30) primary key,
    username VARCHAR(50) unique,
    email VARCHAR(50) unique not null,
    password VARCHAR(50) not null
);