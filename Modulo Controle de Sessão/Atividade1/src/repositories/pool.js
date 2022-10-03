import dotenv from "dotenv";
import * as pg from 'pg';
const {Pool} = pg.default;

dotenv.config({ path: "./env/.env" });

export const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    max: process.env.PG_MAX,
    idleTimeoutMillis: 30000
});