import OpenAI from "openai";
import process from "process";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        message: "Please enter a message.",
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions:
        "You are a helpful medical booking assistant. Answer general health and appointment-related questions clearly and briefly. Do not diagnose diseases, prescribe medication, or replace a doctor. If the user describes an emergency or severe symptoms, advise them to seek immediate professional medical care.",
      input: message,
    });

    return res.status(200).json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong with the AI assistant.",
    });
  }
}