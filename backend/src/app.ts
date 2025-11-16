import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API do Hotel funcionando!");
});

export default app;