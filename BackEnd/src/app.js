import express from "express";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";
const app = express();
app.use(cors());
import { config } from "dotenv";
config();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello there");
});

app.use("/ai", aiRoutes);
app.listen("3000", () => {
  console.log("hello there");
});
