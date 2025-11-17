import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from "../entities/Client";
import { Address } from "../entities/Address";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "hotel-registration",
    synchronize: true,
    logging: false,
    entities: [Client, Address],
});