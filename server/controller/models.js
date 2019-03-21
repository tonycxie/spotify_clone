const path = require('path'),
    SpotifyWebApi = require('spotify-web-api-node');


module.exports = {
    login: (req, res) => {
        // credentials are optional
        console.log("hit controller")
        var spotifyApi = new SpotifyWebApi({
            clientId: '3f6e7e38e060460a848da85a356a0d4c',
            clientSecret: '3549d4a9378b4dd3b7f02c096a87844a',
            redirectUri: 'http://localhost:8888/callback'
        });
        console.log(spotifyApi)
    },
    angular: (req, res) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    }
}