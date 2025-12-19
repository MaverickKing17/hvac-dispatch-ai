
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a helpful and professional HVAC diagnostic assistant for "Go-Air Heating & A/C" in Mississauga. 
Your goal is to help users understand potential issues with their heating or cooling systems.
Guidelines:
1. Be professional, reassuring, and direct.
2. Ask clarifying questions about their system (A/C, Furnace, Heat Pump).
3. Offer potential causes but emphasize that a professional on-site inspection is mandatory for a definitive fix.
4. If they describe an emergency (smell of gas, sparks, no heat in extreme cold), strongly advise calling Go-Air immediately at (905) 555-0123.
5. Keep responses concise and formatted with clear bullet points if needed.
6. Always end with an encouragement to book an inspection or call for immediate help.
`;

export const getDiagnosticResponse = async (userMessage: string) => {
  // Use process.env.API_KEY directly as required by guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        // When setting maxOutputTokens, a thinkingBudget must be set to avoid empty responses
        maxOutputTokens: 500,
        thinkingConfig: { thinkingBudget: 250 },
      },
    });

    // Access .text property directly as it is a getter, not a method
    return response.text || "I'm sorry, I'm having trouble connecting to the diagnostic server. Please call us at (905) 555-0123 for immediate assistance.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. For urgent heating or cooling issues, please call (905) 555-0123.";
  }
};