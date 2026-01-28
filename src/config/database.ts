import { createPool } from 'mysql2/promise';

// Database configuration
const db = {
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234', // Ensure this is the correct password for your MySQL user
  database: 'web-tech-2', // Ensure this database exists
};

// Create the MySQL connection pool
export const pool = createPool({
  host: db.host,
  port: db.port,
  user: db.username,
  password: db.password,
  database: db.database,
});
