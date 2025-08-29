import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { env } from "../env"; // Adjust path if needed

// eslint-disable-next-line antfu/no-top-level-await
const connection = await mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT || 3306,
});

const db = drizzle({ client: connection });

export default db;
