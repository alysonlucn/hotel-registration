import { AppDataSource } from "../database/data-source";
import { Client } from "../entities/Client";

export const getClientByIdService = async (id: number) => {
    const repo = AppDataSource.getRepository(Client);

    const client = await repo.findOne({
        where: { id },
        relations: ["address"]
    });

    return client;
};