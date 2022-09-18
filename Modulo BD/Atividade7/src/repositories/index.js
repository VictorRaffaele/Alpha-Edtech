import * as pg from 'pg';
import * as conf from '../env/conf.env';
const {Pool} = pg.default;


export const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 8080,
    database: 'postgres',
    max: 10,
    idleTimeoutMillis: 30000
});