const SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  redirectUri: `${process.env.redirectUri}/api/auth/callback`,
});

const search = (searchValue) =>
  new Promise((res, rej) => {
    try {
      const scopes = ["album", "artist", "playlist", "track"];
      spotifyApi
        .search(String(searchValue).toLocaleLowerCase().trim(), scopes)
        .then(
          (data) => {
            res(data.body);
          },
          (err) => {
            rej(err);
          }
        );
    } catch (error) {
      rej(error);
    }
  });

const createAuthorizeURL = () =>
  new Promise((res, rej) => {
    try {
      const scopes = [
        "user-read-private",
        "user-read-email",
        "playlist-modify-public",
        "playlist-modify-private",
      ];
      const url = spotifyApi.createAuthorizeURL(scopes);
      res(url + "&show_dialog=true");
    } catch (error) {
      console.log("ERROR", error);
      rej(error);
    }
  });

const getToken = (code) =>
  new Promise(async (res, rej) => {
    try {
      const data = await spotifyApi.authorizationCodeGrant(code);
      const { access_token } = data.body;
      res(access_token);
    } catch (error) {
      rej(error);
    }
  });

const setToken = (code) =>
  new Promise(async (res, rej) => {
    try {
      await spotifyApi.setAccessToken(code);
      res(true);
    } catch (error) {
      rej(error);
    }
  });

module.exports = { createAuthorizeURL, setToken, search, getToken };
