import { AppDataSource } from "../database/data-source";
import { Client } from "../entities/Client";
import { Address } from "../entities/Address";

interface IClientRequest {
    name: string;
    cpf: string;
    phone: string;

    address: {
        cep: string;
        street: string;
        city: string;
        state: string;
        complement?: string;
        number?: string;
    };
}

export const createClientService = async (data: IClientRequest) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const addressRepository = AppDataSource.getRepository(Address);

    const address = addressRepository.create({
        cep: data.address.cep,
        street: data.address.street,
        city: data.address.city,
        state: data.address.state,
        complement: data.address.complement,
        number: data.address.number,
    });

    await addressRepository.save(address);

    const client = clientRepository.create({
        name: data.name,
        cpf: data.cpf,
        phone: data.phone,
        address: address,
    });

    await clientRepository.save(client);

    return client;
}