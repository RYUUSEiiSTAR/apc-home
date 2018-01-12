const https = require('http');
const querystring = require('querystring');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const params = querystring.stringify({
    api_key: 'e2004806c855de6f5f882c498ef4c5d8',
    method: 'flickr.photosets.getPhotos',
    photoset_id: '72157689007399362',
    user_id: '137676527@N05',
    extras: 'description',
    format: 'json',
    jsoncallback: '1'
});

const options = {
    hostname: 'api.flickr.com',
    path: '/services/rest/?' + params
}

app.get('/api/flickr', (apiRequest, apiResponse) => {
    https.get(options, (req, res) => {
        let body;
        console.log(body);
        res.on('data', (data) => {
            body += data;
            console.log(`${data}`);
        })
        res.end('end', () => {
            console.log(`${body}`);
            body = JSON.parse(body)
            apiResponse.send({ 'response': body });
        })
    }).on('error', (error) => {
        console.log(error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));