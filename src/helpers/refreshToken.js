import { client_id, client_secret, refresh_token } from '../urlconfig';
var axios = require('axios');
var data = JSON.stringify({ "client_id": client_id, "client_secret": client_secret, "refresh_token": refresh_token, "grant_type": "refresh_token" });


var config = {
    method: 'post',
    url: 'https://www.googleapis.com/oauth2/v4/token',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};

var refresh = async function () {
    await axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            window.localStorage.setItem('token', response.data.access_token);
        })
        .catch(function (error) {
            console.log(error);
        });
}
export default refresh
