// controllers/ai.controller.js
import aiService from "../services/ai.service.js";

const getReview = async (req, res) => {
  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).send("prompt is required");
  }

  try {
    const response = await aiService(prompt);
    res.send(response);
  } catch (err) {
    console.error("Error in getReview:", err);
    res.status(500).send("Internal Server Error");
  }
};

export default {
  getReview,
};
