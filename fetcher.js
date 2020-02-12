const url = process.argv[2];
const path = process.argv[3];
const request = require("request");
const fs = require("fs");

request(url, (error, response, body) => {
  fs.writeFile(path, body, err => {
    if (err) throw err;
    console.log(
      `Downloaded and saved ${fs.statSync(path).size} bytes to ${path}.`
    );
  });
});
