const express = require("express");
const { toanime } = require('betabotz-tools');
const app = express();
const PORT = process.env.PORT || 3000;

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