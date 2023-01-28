const express = require('express');
const router = express.Router();

const Story = require('../models/Stories')
const Photograph = require('../models/Photograph')

router.post('/stories', async(req, res)=>{
    try {
        const story = await Story.create(req.body)
        res.status(201).json({ story })
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

module.exports = router;

router.post('/photograph', async(req, res)=>{
    try {
        const photograph = await Photograph.create(req.body)
        res.status(201).json({ photograph })
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

module.exports = router;