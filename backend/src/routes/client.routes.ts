import { Router } from "express";
import { createClientController } from "../controllers/client.controller";

const router = Router();

router.post("/", createClientController);

export default router;