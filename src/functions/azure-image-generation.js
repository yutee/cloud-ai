import OpenAI from "openai";
import { response } from "../api/response";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export default async function generateImage() {
    try { const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: "A cute baby sea otter"
    });

    console.log(image.data);
    console.log('app running');
    } catch (error) {
        console.error("An error occurred:", error);
    }

    return response; // mock response should be deleted after OpenAI key is gotten
}
