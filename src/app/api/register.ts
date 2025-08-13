import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'src/app/api/users.json');

function readUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeUsers(users: any[]) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const users = readUsers();
  if (users.find((u: any) => u.email === email)) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }
  const user = { email, password };
  users.push(user);
  writeUsers(users);
  return NextResponse.json({ success: true, user });
}

export async function GET() {
  const users = readUsers();
  return NextResponse.json(users);
}
