import { Client } from 'pg';
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config();

// PostgreSQL client configuration from .env
const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

async function runSQLFile() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Read SQL file
    const sql = fs.readFileSync('./db/users_roles.sql', 'utf8');

    // Execute SQL
    await client.query(sql);
    console.log('PostgreSQL setup complete');
  } catch (err) {
    console.error('Error running SQL file:', err);
  } finally {
    await client.end();
    console.log('Disconnected from PostgreSQL');
  }
}

runSQLFile();
