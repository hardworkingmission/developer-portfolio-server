const Project = require('../models/project');
const allProjects = async (req, res) => {
  const result = await Project.find({});
  res.send(result);
};
const singleProject = async (req, res) => {
  const projectId = req.params.id;
  const result = await Project.findOne({ _id: projectId });
  res.send(result);
};
const createProject = async (req, res) => {
  const projectInfo = req.body;
  const result = await Project.create(projectInfo);
  res.send(result);
};

module.exports = {
  allProjects,
  singleProject,
  createProject,
};
