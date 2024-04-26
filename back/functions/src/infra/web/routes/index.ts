import bodyParser from "body-parser";
import express from "express";
import AcolhimentoRoutes from "./AcolhimentoRoutes";

const app = express();
app.use(bodyParser.json());

app.use("/acolhimentos", AcolhimentoRoutes);

export default app;
