
import { GoogleGenAI, Type } from "@google/genai";
import { PricingTier, Itinerary } from "../types";

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateItinerary = async (
  region: string,
  tier: PricingTier,
  duration: number
): Promise<Itinerary> => {
  const prompt = `Generate a comprehensive ${duration}-day travel itinerary for a ${tier} traveler visiting the ${region} region of Ethiopia.
  The response must be in JSON format and include a day-by-day plan with specific "Must-See" spots and accommodation recommendations appropriate for the ${tier} tier.
  
  Pricing guidelines:
  - Budget: Local guesthouses and pensions.
  - Standard: Mid-range hotels/lodges and domestic flights.
  - Luxury: High-end boutique lodges and private 4x4 transport.
  
  Return a structured JSON object matching the requested schema.`;

  // Use gemini-3-pro-preview for complex reasoning tasks like itinerary planning
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          region: { type: Type.STRING },
          tier: { type: Type.STRING },
          duration: { type: Type.NUMBER },
          estimatedTotal: { type: Type.NUMBER },
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.NUMBER },
                activity: { type: Type.STRING },
                mustSee: { type: Type.ARRAY, items: { type: Type.STRING } },
                accommodation: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    type: { type: Type.STRING }
                  },
                  required: ["name", "type"]
                }
              },
              required: ["day", "activity", "mustSee", "accommodation"]
            }
          }
        },
        required: ["region", "tier", "duration", "estimatedTotal", "days"]
      }
    }
  });

  if (!response.text) {
    throw new Error("Failed to generate itinerary");
  }

  return JSON.parse(response.text.trim());
};
