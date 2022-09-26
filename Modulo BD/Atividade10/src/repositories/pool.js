import * as pg from 'pg';
const {Pool} = pg.default;

export const pool = new Pool({
    user: 'postgres',
    password: '248655',
    host: 'localhost',
    port: 8080,
    database: 'postgres',
    max: 10,
    idleTimeoutMillis: 30000
});