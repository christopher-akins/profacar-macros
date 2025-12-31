import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const UserTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp({ withTimeZone: true }).defaultNow().notNull(),
});
