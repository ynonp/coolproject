'use server';

import { usersTable } from '../db/schema';
import { db } from "@/db/drizzle";
import { getSession, GetSession } from '@auth0/nextjs-auth0';

export async function getPeople() {
  const session = await getSession();
  console.log(session);
  if (session) {
    console.log(session.user);
  }
  const users = await db.select().from(usersTable);
  return users;
}