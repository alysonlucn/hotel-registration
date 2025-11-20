import { Request, Response } from "express";
import { getClientByIdService } from "../services/getClientById.service";

export const getClientByIdController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const client = await getClientByIdService(id);

    if (!client) {
        return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.json(client);
};