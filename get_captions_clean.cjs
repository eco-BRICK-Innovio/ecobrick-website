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
                    res2.on('end', () => {
                        try {
                            const parsed = JSON.parse(cdata);
                            parsed.events.forEach(e => {
                                if (e.segs && e.segs.length > 0) {
                                    const text = e.segs.map(s => s.utf8).join('');
                                    if (text.trim() && text.trim() !== '\n') {
                                        console.log(`[${e.tStartMs} - ${e.tStartMs + (e.dDurationMs || 0)}] ${text}`);
                                    }
                                }
                            });
                        } catch (e) {
                            console.error("JSON Error");
                        }
                    });
                });
            }
        }
    });
});
