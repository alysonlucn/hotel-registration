import "dotenv/config";
import express from "express";
import clientRoutes from "./routes/client.routes";
import cepRoutes from "./routes/cep.routes";

const app = express();

app.use(express.json());

app.use("/clients", clientRoutes);

app.use("/cep", cepRoutes);

export default app;