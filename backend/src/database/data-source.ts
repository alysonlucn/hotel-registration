import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from "../entities/Client";
import { Address } from "../entities/Address";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [__dirname + "/../entities/*.{ts,js}"],
    migrations: [],
    subscribers: [],
});