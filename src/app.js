import express from "express";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://ai-gen-jbps.vercel.app/",  // Replace with your actual origin or use a function for dynamic origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
  credentials: true, // Enable cookies and credentials if needed
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello there");
});

app.use("/ai", aiRoutes);

export { app };
