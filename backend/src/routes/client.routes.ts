import { Router } from "express";
import { createClientController } from "../controllers/client.controller";
import { validateData } from "../middlewares/validate.middleware";
import { clientSchema } from "../schemas/client.schema";
import { listClientsController } from "../controllers/listClients.controller";
import { getClientByIdController } from "../controllers/getClientById.controller";
import { deleteClientController } from "../controllers/deleteClient.controller";

const router = Router();

router.post("/", validateData(clientSchema), createClientController);
router.get("/", listClientsController);
router.get("/:id", getClientByIdController);
router.delete("/:id", deleteClientController);

export default router;