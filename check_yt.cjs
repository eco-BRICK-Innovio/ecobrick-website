const https = require('https');

https.get('https://www.youtube.com/watch?v=ITRvrJCMjOc', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const match = data.match(/"captionTracks":\[(.*?)\]/);
        if (match) {
            console.log("Caption tracks found!");
            const tracksStr = '[' + match[1] + ']';
            try {
                const tracks = JSON.parse(tracksStr);
                tracks.forEach(t => console.log(`- Lang: ${t.languageCode}, Name: ${t.name.simpleText}`));
            } catch (e) {
                console.log("Error parsing");
            }
        } else {
            console.log("No caption tracks found.");
        }
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
