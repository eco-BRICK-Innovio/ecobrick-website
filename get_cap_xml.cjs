const https = require('https');
https.get('https://www.youtube.com/watch?v=ITRvrJCMjOc', (res) => {
    let data = '';
    res.on('data', (c) => data += c);
    res.on('end', () => {
        const match = data.match(/"captionTracks":\[(.*?)\]/);
        if(match) {
            const track = JSON.parse('['+match[1]+']').find(t => t.languageCode==='iw');
            https.get(track.baseUrl, (res2) => {
                let d2 = '';
                res2.on('data', c => d2 += c);
                res2.on('end', () => console.log(d2));
            });
        }
    });
});
