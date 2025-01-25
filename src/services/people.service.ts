'use server';

import { usersTable } from '../db/schema';
import { sql } from "drizzle-orm";
import { db } from "@/db/drizzle";


export async function getPeople() {
  console.log(process.env.DATABASE_URL);
  const rawUsers = await db.execute(sql`SELECT * FROM users`);
  console.log(`rawUsers = `, rawUsers);

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)  
  return users;
}