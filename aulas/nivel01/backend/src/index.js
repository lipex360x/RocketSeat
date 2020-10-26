const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const projects = [];

function logRequest( req, res, next ){
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.time(logLabel);
  next();
  console.timeEnd(logLabel);

}

function validateUuid( req, res, next ){
  const { id } = req.params;

  if ( !isUuid (id) ){
    return res.status(401).json({error: "invalid project ID"});
  }

  return next();
}

app.use(logRequest);
app.use('/projects/:id', validateUuid);

app.get('/projects', (req, res) => {
  const { title } = req.query;

  const results = title
    ? projects.filter( p => p.title.includes(title) )
    : projects

  return res.json(results);
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;

  const project = {
    id: uuid(),
    title,
    owner
  }

  projects.push(project)

  return res.json(project);
})

app.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex( p => p.id === id);

  if(projectIndex < 0){
    return res.status(400).json({error: "project not found"});
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project;

  return res.json(projects[projectIndex]);
})

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex( p => p.id === id);

  if(projectIndex < 0){
    return res.status(400).json({error: "project not found"});
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send()
})


app.listen(3333, () => {
  console.log('🚀 Backend started!')
});