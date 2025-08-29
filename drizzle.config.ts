import type { Config } from "drizzle-kit";

import { env } from "./server/env";

export default {
  schema: "./server/db/schema.ts",
  out: "./server/db/migrations",
  dialect: "mysql",
  dbCredentials: {
    host: env.DB_HOST || "localhost",
    port: Number(env.DB_PORT) || 3306,
    user: env.DB_USER || "root",
    password: env.DB_PASSWORD || "amaro071318",
    database: env.DB_NAME || "sample_db",
  },
} satisfies Config;
