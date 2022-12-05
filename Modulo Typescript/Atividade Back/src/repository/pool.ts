import dotenv from "dotenv";
import pg from 'pg';

dotenv.config({ path: "../env/.env" });

const pool = new pg.Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE,
    max: Number(process.env.PG_MAX),
    idleTimeoutMillis: 30000
});

export {pool};