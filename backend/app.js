const express = require('express')
const fs = require('fs')
const app = express()
const port = 8081

const projects = require('./projects.json');

var cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.put('/projects/init-project/:width/:height', (req, res) => {
    let width = Number(req.params.width);
    let height = Number(req.params.height);
    let projectId = projects.length;

    console.log(req.params);

    let json = {
        id:projectId,
        width:width,
        height:height
    }
    
    projects.push(json);
    fs.writeFile('./projects.json', JSON.stringify(projects), err => {
        if (err) console.log(err);
    })
    res.send({id: projectId});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})