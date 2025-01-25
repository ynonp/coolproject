import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { usersTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);

export async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };

  // await db.insert(usersTable).values(user);
  await db.insert(usersTable).values({name: 'ynon', age: 20, email: 'ynonp@gmail.com'});
  console.log('New users created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
}

main();
