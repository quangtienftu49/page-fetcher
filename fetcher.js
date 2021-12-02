const request = require('request');
const fs = require('fs');
const http = require('http');

const url = 'http://www.example.edu/';
const localPath = './index.html';
request(url, (err, res, body) => {
  if (err) {
      return console.log(err);
  }
  const content = console.log(body);

  fs.writeFile(localPath, content, err => {
    if (err) {
      console.error(err);
      return
    };
    // console.log(`Downloaded and saved ${content} bytes to ${localPath}`);
  })
});

