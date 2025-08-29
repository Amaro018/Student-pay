import { sql } from "drizzle-orm";
import { boolean, date, datetime, decimal, int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

// 1. Users (Cashiers/Admins)
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: varchar("role", { length: 20 }).default("cashier"),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// 2. Students
export const students = mysqlTable("students", {
  id: int("id").autoincrement().primaryKey(),
  studentId: varchar("student_id", { length: 20 }).notNull().unique(),
  fullName: varchar("full_name", { length: 100 }).notNull(),
  course: varchar("course", { length: 50 }),
  yearLevel: int("year_level"),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

// 3. Tickets (like invoices)
export const tickets = mysqlTable("tickets", {
  id: int("id").autoincrement().primaryKey(),
  studentId: int("student_id").references(() => students.id).notNull(),
  cashierId: int("cashier_id").references(() => users.id),
  status: varchar("status", { length: 20 }).default("pending"), // pending, paid, cancelled
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
  paidAt: datetime("paid_at"),
});

// 4. Ticket Items
export const ticketItems = mysqlTable("ticket_items", {
  id: int("id").autoincrement().primaryKey(),
  ticketId: int("ticket_id").references(() => tickets.id).notNull(),
  description: varchar("description", { length: 100 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  isPaid: boolean("is_paid").default(false),
});

// 5. Payments (cashier logs)
export const payments = mysqlTable("payments", {
  id: int("id").autoincrement().primaryKey(),
  ticketId: int("ticket_id").references(() => tickets.id).notNull(),
  cashierId: int("cashier_id").references(() => users.id).notNull(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: varchar("payment_method", { length: 20 }).default("cash"),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});
