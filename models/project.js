const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  img: String,
  tags: Array,
  codeLink: { linkTitle: { tyep: Array }, link: { tyep: Array } },
  demoLink: String,
});

const Project = new mongoose.model('Project', ProjectSchema);

module.exports = Project;
