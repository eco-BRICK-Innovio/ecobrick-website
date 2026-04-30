const https = require('https');

https.get('https://www.youtube.com/watch?v=ITRvrJCMjOc', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const match = data.match(/"captionTracks":\[(.*?)\]/);
        if (match) {
            const tracksStr = '[' + match[1] + ']';
            const tracks = JSON.parse(tracksStr);
            const heTrack = tracks.find(t => t.languageCode === 'iw');
            if (heTrack) {
                https.get(heTrack.baseUrl + '&fmt=json3', (res2) => {
                    let cdata = '';
                    res2.on('data', (c) => cdata += c);
                    res2.on('end', () => console.log(cdata));
                });
            }
        }
    });
});
