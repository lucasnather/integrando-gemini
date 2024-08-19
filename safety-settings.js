import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

export const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];
  