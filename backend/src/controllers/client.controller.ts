import { Request, Response } from "express";
import { createClientService } from "../services/createClient.services";

export const createClientController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        
        const newClient = await createClientService(data);

        return res.status(201).json(newClient);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Internal server error" });
    }
};