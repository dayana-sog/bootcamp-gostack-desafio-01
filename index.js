const express = require('express');
const server = express();

server.use(express.json());

const projects = [{
  id : "1",
  title : "Novo projeto",
  task : []
}]


//ID verification
function checkingIfIdExists (req, res, next) {
  const {id} = req.params;
  const project = projects.find(proj => proj.id == id);
  req.params.project = project;

  if(!project) {
    return res.status(400).json({ error : "Id does not exist."})
  }

  return next();
}


//Counting requisitions
function countingReq (req, res, next) {

  console.count('Requisitions number: ');

  next();
}

server.use(countingReq);

//Show all projects
server.get('/projects', countingReq, (req, res) => {

  return res.json(projects);

})

//Update project title
server.put('/projects/:id', checkingIfIdExists, countingReq, (req, res) => {
  const {id} = req.params;
  const {title} = req.body;
  const project = projects.find(proj => proj.id == id);
  
  project.title = title;

  return res.json(projects);
})

//Delete a project
server.delete('/projects/:id', checkingIfIdExists, countingReq, (req, res) => {
  const {id} = req.params;
  const projectIndex = projects.findIndex(proj => proj.id == id);

  projects.splice(projectIndex,1);

  return res.send('Project deleted');
})

//Create a new project
server.post('/projects/', countingReq, (req, res) => {
  const {id, title} = req.body;
  const project = projects.findIndex(proj => proj.id == id);

  const newProject = {
    id,
    title,
    task: []
  };

  projects.push(newProject);

  return res.json(projects);
})

//Create new task for an existing project
server.post('/projects/:id/tasks', countingReq, (req, res) => {
  const {id} = req.params;
  const {title} = req.body;
  const project = projects.find(proj => proj.id == id);

  project.task.push(title);

  return res.json(projects);
})

server.listen(3000);