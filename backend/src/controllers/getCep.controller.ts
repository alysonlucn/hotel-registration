import { Request, Response } from "express";
import { getCepService } from "../services/getCep.service";

export const getCepController = async (req: Request, res: Response) => {
    const { cep } = req.params;

    try {
        const data = await getCepService(cep);
        return res.json(data);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
};