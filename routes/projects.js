const express = require('express');
const router = express.Router();
const {
  allProjects,
  singleProject,
  createProject,
} = require('../controls/projects');

router.route('/').get(allProjects).post(createProject);
router.route('/:id').get(singleProject);

module.exports = router;
