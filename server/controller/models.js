const path = require('path'),
    SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '',
  clientSecret: '',
  redirectUri: ''
});

module.exports = {
    angular: (req, res) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    }
}