const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    category: {
        type: String,
        enum: ['frontend', 'backend', 'database', 'other'],
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
