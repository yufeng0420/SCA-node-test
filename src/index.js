const express = require('express')
const getRSSFeed = require('./utilities/rss-parser')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const test = await getRSSFeed("https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss")
  console.log({ test })
  res.send(test)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})