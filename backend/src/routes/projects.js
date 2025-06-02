const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate('userId', 'name');
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get user's projects
router.get('/my-projects', auth, async (req, res) => {
    try {
        const projects = await Project.find({ userId: req.userId });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create project
router.post('/', auth, async (req, res) => {
    try {
        const project = new Project({
            ...req.body,
            userId: req.userId
        });
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update project
router.put('/:id', auth, async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id, userId: req.userId });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        
        Object.assign(project, req.body);
        await project.save();
        res.json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete project
router.delete('/:id', auth, async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id, userId: req.userId });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        
        await project.remove();
        res.json({ message: 'Project removed' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
