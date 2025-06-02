const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const auth = require('../middleware/auth');

// Get all skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find().populate('userId', 'name');
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get user's skills
router.get('/my-skills', auth, async (req, res) => {
    try {
        const skills = await Skill.find({ userId: req.userId });
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create skill
router.post('/', auth, async (req, res) => {
    try {
        const skill = new Skill({
            ...req.body,
            userId: req.userId
        });
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update skill
router.put('/:id', auth, async (req, res) => {
    try {
        const skill = await Skill.findOne({ _id: req.params.id, userId: req.userId });
        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        
        Object.assign(skill, req.body);
        await skill.save();
        res.json(skill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete skill
router.delete('/:id', auth, async (req, res) => {
    try {
        const skill = await Skill.findOne({ _id: req.params.id, userId: req.userId });
        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        
        await skill.remove();
        res.json({ message: 'Skill removed' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
