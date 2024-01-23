const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://chat.whatsapp.com/JaVWixMVIP2EG1W6uABTRY';

axios.get(url)
  .then((response) => {
    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent);

    // Extract the desired elements
    const textElement = $('h3._9vd5._9scr');
    const imageElement = $('img._9vx6');

    // Extract text and image URL if elements are found
    const text = textElement.text() || 'No text found.';
    const imageUrl = imageElement.attr('src') || 'No image found.';

    // Create a JavaScript object with the extracted information
    const result = {
      text: text,
      imageUrl: imageUrl,
    };

    // Convert the JavaScript object to JSON format
    const jsonResult = JSON.stringify(result, null, 2);

    // Print the JSON result
    console.log(jsonResult);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
