const fs = require('fs');

const indexNf = fs.readFileSync('./libs/native-federation/src/index.ts', {
  encoding: 'utf-8',
});
fs.writeFileSync('./dist/libs/native-federation/src/index.js', indexNf);
