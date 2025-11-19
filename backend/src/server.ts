import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./database/data-source";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Conectou viu");

    app.listen(PORT, () => {
      console.log(`Rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao inicializar o banco:", error);
  });