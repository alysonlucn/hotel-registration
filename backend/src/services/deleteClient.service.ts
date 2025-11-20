import { AppDataSource } from "../database/data-source";
import { Client } from "../entities/Client";

export const deleteClientService = async (id: number) => {
    const repo = AppDataSource.getRepository(Client);

    await repo.delete(id);
};