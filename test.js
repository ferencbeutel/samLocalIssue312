'use strict';

const fs = require('fs');

exports.getBinary = (event, context, respond) => {
  fs.readFile('testImage.png', (err, data) => {
    respond(null, {
      statusCode: 200,
      body: data.toString('base64'),
      isBase64Encoded: true,
      headers: {
        ["Content-Type"]: 'image/png'
      }
    });
  });
};

exports.getBase64 = (event, context, respond) => {
  fs.readFile('testImage.png', (err, data) => {
    respond(null, {
      statusCode: 200,
      body: data.toString('base64'),
      headers: {
        ["Content-Type"]: 'image/png'
      }
    });
  });
};
