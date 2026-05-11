const fs = require('fs');
const content = fs.readFileSync('dist/assets/index-BEPfIklT.js', 'utf8');
const index = content.indexOf('profile.jpg');
if (index !== -1) {
    console.log(content.substring(index - 50, index + 50));
} else {
    console.log('Not found');
}
