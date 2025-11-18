import { Request, Response } from "express";

export const createClientController = async (req: Request, res: Response) => {
    try {
        console.log("Chegou no controller! Dados recebidos:", req.body);

        return res.status(201).json({
            message: "Client route working (ainda sem salvar no banco!)"
        });
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
};