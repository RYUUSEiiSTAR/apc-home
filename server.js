const https = require('https');
const querystring = require('querystring');
const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

const params = querystring.stringify({
    api_key: process.env.FLICKR_KEY,
    method: 'flickr.photosets.getPhotos',
    photoset_id: '72157689007399362',
    user_id: '137676527@N05',
    extras: 'description',
    format: 'json',
    jsoncallback: '1'
});

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://airportpistolclub.com.au");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

const options = {
    hostname: 'api.flickr.com',
    path: '/services/rest/?' + params,
    headers: {
        'Content-Type': 'application/json'
    }
}

app.use(allowCrossDomain);
app.get('/api/flickr-photosets', (apiRequest, apiResponse) => {
    https.get(options, (res) => {
        let body = '';

        res.on('data', (data) => {
            body += data;
        })
        res.on('end', () => {
            body = body.substr(2).slice(0, -1);
            body = JSON.parse(body)
            console.log(body);
            apiResponse.send(JSON.stringify(body));
        })
    }).on('error', (error) => {
        console.log(error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
