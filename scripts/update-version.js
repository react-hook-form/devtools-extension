const fs = require('fs');

const packagePath = './package.json';
const manifestPath = './public/manifest.json';

const newVersion = process.argv[3];

const readAndWriteNewVersion = (path) => {
  const data = JSON.parse(fs.readFileSync(path));
  data.version = newVersion;
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

readAndWriteNewVersion(packagePath);
readAndWriteNewVersion(manifestPath);
