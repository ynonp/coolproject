'use server';

import { usersTable } from '../db/schema';
import { db } from "@/db/drizzle";


export async function getPeople() {
  const users = await db.select().from(usersTable);
  return users;
}