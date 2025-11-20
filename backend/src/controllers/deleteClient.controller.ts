import { Request, Response } from "express";
import { deleteClientService } from "../services/deleteClient.service";

export const deleteClientController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    await deleteClientService(id);

    return res.status(204).send();
};