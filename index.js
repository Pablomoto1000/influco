const youtubeChannel = require('./quickstart');
const express = require('express')
const app = express()
const port = 3000

let val = youtubeChannel.youtubeChannel();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))