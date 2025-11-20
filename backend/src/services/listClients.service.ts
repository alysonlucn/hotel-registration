import { AppDataSource } from "../database/data-source";
import { Client } from "../entities/Client";

export const listClientsService = async () => {
    const clientRepository = AppDataSource.getRepository(Client);
    return await clientRepository.find({
        relations: ["address"]
    });
};      