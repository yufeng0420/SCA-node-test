const express = require('express')
const getPayload = require('./utilities/get-payload')
const app = express()
const port = 3000

app.get('/', async (req, res) => {

  const payload = await getPayload()

  res.send(payload)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})