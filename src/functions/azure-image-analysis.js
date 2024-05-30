
const createClient = require('@azure-rest/ai-vision-image-analysis').default;
const { AzureKeyCredential } = require('@azure/core-auth');

// Load the .env file if it exists
// require("dotenv").config();

const endpoint = process.env['VISION_ENDPOINT'] || 'https://cloud-ai-vision.cognitiveservices.azure.com/';
const key = process.env['VISION_KEY'] || '467ab051f16b4c8c81d2b063bef3f6b3';
const credential = new AzureKeyCredential(key);

const client = createClient(endpoint, credential);

const feature = [
  'Caption'
];

export default async function analyzeImage(imageUrl) {

  const result = await client.path('/imageanalysis:analyze').post({
    body: { url: imageUrl },
    queryParameters: { features: feature},
    contentType: 'application/json'
  });

  const iaResult = result.body;
  const caption = iaResult.captionResult.text;

  // Processing the response
  // if (iaResult.captionResult.text.length > 0) {
  //   console.log(`This is likely ${caption}`);
  // } else {
  //   console.log('No caption detected.');
  // }
  // Processing moved to App level

  return caption;
}