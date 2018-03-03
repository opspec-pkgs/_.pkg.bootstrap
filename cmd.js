const fs = require('fs');
const opYml = require('/opYml.json');
const contentList = require('/opContentList.json');

fs.writeFileSync('/data', JSON.stringify({opYml, contentList}))