import "dotenv/config";
import express from "express";
import clientRoutes from "./routes/client.routes";

const app = express();

app.use(express.json());


app.use("/clients", clientRoutes);

export default app;