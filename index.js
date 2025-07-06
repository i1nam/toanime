const express = require("express");
const { toanime } = require('betabotz-tools');
const app = express();
const PORT = process.env.PORT || 3000;
/*

const axios = require("axios");
(async () => {
    
let data = JSON.stringify({
  "msisdn": "7878580841"
});

let config = {
  method: 'POST',
  url: 'https://mw-mobileapp.iq.zain.com/api/otp/request',
 headers: {
    'User-Agent': 'okhttp/4.11.0',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip',
    'Content-Type': 'application/json',
    'Skel-Accept-Language': 'en',
    'Skel-Platform': 'Android',
    'Skel-OS-Version': '13',
    'Skel-Fix-Version': '6.2.6',
    'Skel-Installation-Id': '95c6b9d38ad23442f2a5888817006a21fa3ed909',
    'Content-Type': 'application/json; charset=UTF-8',
  },
  data: data
};
for(i=0; i<3; ++i) {
 let x = await axios.request(config);
 console.log(i+1+" ¦ Done: "+x.data.status)
  }
})();
*/
app.get( "/", ( req, res ) => {
    res.send("hi im run in cpu 4 hhhh");
})
app.get( "/toanime",async ( req, res ) => {
    const url = req.query.url;
    if(!url) {
        return res.status(403).json({
            status: 403
        })
    }
    try {
    const results = await toanime(url)
    res.json(results)
    } catch (e) {
        res.status(500).json({
            err: "cant convert image"
        })
    }
})

app.listen( PORT, () => {
    console.log("IM RANNING IN PORT: ", PORT);
})
