'use server';

import { usersTable } from '../db/schema';
import { db } from "@/db/drizzle";
import { getSession, GetSession } from '@auth0/nextjs-auth0';

export async function getAllUsers() {
  return db.select().from(usersTable);
}

export async function getPeople() {
  const session = await getSession();
  
  if (session) {
    console.log(session.user);
  }

  return getAllUsers();
}