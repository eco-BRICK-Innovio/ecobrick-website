const https = require('https');
const fs = require('fs');

function download(url, dest) {
  const options = {
    headers: {
      'User-Agent': 'CoolBot/1.0 (shlom@example.com)'
    }
  };
  https.get(url, options, res => {
    if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
      return download(res.headers.location, dest);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Downloaded', dest);
    });
  }).on('error', err => {
    console.error(err);
  });
}

download('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/City_of_Ashdod%2C_Israel_%E2%80%94_60th_anniversary_logo_with_COA_%E2%80%94_colorful.svg/1024px-City_of_Ashdod%2C_Israel_%E2%80%94_60th_anniversary_logo_with_COA_%E2%80%94_colorful.svg.png', 'public/ashdod-logo.png');
download('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_of_the_Ashdod_Development_Company.svg/512px-Logo_of_the_Ashdod_Development_Company.svg.png', 'public/hapa-logo.png');
