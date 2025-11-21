import { Router } from "express";
import { getCepController } from "../controllers/getCep.controller";

const router = Router();

router.get("/:cep", getCepController);

export default router;