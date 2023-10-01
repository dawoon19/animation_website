const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.put('/projects/:id', (req, res) => {
    req.params.id
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})