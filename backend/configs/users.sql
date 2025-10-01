
-- Create roles table
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);

-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100),
  password VARCHAR(255) NOT NULL,
  role_id INT REFERENCES roles(id)
);

-- Insert sample roles
INSERT INTO roles (name) VALUES ('Admin'), ('User'), ('Moderator');

-- Query to fetch all users with role names
SELECT u.id,
       u.username,
       u.email,
       r.name AS role_name
FROM users u
JOIN roles r ON u.role_id = r.id;
