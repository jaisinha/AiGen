import { app } from "./src/app.js";
import { config } from "dotenv";
config();
app.listen("3000", () => {
  console.log("hello there");
});
