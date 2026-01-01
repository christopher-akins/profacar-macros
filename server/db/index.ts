// import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema.ts";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const db = drizzle(pool, { schema });

// OR

// Below is the same as above

// import { drizzle } from "drizzle-orm/node-postgres"
// const db = drizzle(process.env.DATABASE_URL);
// const pool = db.$client;