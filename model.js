import { GoogleGenerativeAI } from '@google/generative-ai'
import { generationConfig } from './config.js'
import { safetySettings } from './safety-settings.js'

export async function chooseModel(modelAI) {
    
    const apiKey = process.env.GEMINI_API_KEY
    const googleGenAI = new GoogleGenerativeAI(apiKey);

    const model = googleGenAI.getGenerativeModel({
        model: modelAI,
        generationConfig,
        safetySettings
      });
      
    return model
}