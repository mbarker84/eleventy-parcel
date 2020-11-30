const fs = require('fs');

fs.writeFile('src/_data/version.json', '', function (err) {
  if (err) return console.log(err);
  console.log(`${''} > src/_data/version.json`);
});