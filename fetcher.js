const request = require('request');
const fs = require('fs')

let input = process.argv.slice(1);
console.log(input)


if (!(input[1].includes('http://www.'))) { 
  input[1] = 'http://www.'+ input[1];
}

//RECIEVING INFORMATION

request(input[1], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 /*  console.log('body:', body); // Print the HTML for the Google homepage. */
  console.log(body.length);
  fs.writeFile(input[2], body, err => {
    if (err) {
      console.error(err);
      return;
    }
  })
  console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
});


// WRITING FILE 

