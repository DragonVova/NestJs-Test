import * as dotenv from 'dotenv';
dotenv.config();

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  timezone: 'Z',
  entities: ['src/entities/**/*.entity.{ts,js}'],
  migrations: ['src/migrations/**/*.{ts,js}'],
  subscribers: ['src/subscriber/**/*.{ts,js}'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscriber',
  },
};
