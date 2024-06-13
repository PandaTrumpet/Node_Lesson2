import dotenv from 'dotenv';

dotenv.config();
export function env(name, defaultValue) {
  const value = process.env[('PORT', '3000')];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}
