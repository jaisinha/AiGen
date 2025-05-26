import express from "express";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";
const app = express();
import { config } from "dotenv";
config();
const corsOptions = {
  origin: "https://ai-gen-jbps.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"], // Add allowed headers explicitly if needed
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, some Android browsers) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello there");
});

app.use("/ai", aiRoutes);
app.listen("3000", () => {
  console.log("hello there");
});
