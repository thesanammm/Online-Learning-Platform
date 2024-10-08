CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);


INSERT INTO students (name, email, password)
VALUES ('Sanam Das', 'sdb120nist.edu', 'password123');
