const Advert = require('../models/Advert')
const Story = require('../models/Stories')
const Photograph = require('../models/Photograph')

const express = require('express');
const router = express.Router()

// advert
router.get('/advert', async(req, res)=>{
    try {
        const adverts = await Advert.find({})
        res.status(200).json({ adverts })
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

router.get('/advert/:id',  async(req, res)=>{
    try {
        const {id: advertID } = req.params
        const advert = await Advert.findOne({_id:advertID})
        if(!advert){
            return res.status(404).json({msg:`no task with id: ${advertID}`})
        }
        res.status(200).json({ advert })
    } catch (error) {
        res.status(500).json({msg: error})
    }
    res.json({id : req.params.id})
})

router.patch('/advert/edit-advert-details/:id', async(req, res)=>{
    try {
        const {id: advertID } = req.params
        const advert = await Advert.findOneAndUpdate({_id:advertID}, req.body,{
            new: true,
            runValidators: true
        })

        if(!advert){
            return res.status(404).json({msg:`no task with id: ${advertID}`})
        }
        res.status(200).json({ advert })
    } catch (error) {
        res.status(500).json({msg: error})

    }
})

router.post('/advert/store-advert-details', (req, res)=>{
    res.send('store advert details')
})


//stories
router.get('/stories', async(req, res)=>{
    try {
        const stories = await Story.find({})
        res.status(200).json({ stories })
    } catch (error) {
        res.status(500).json({msg: error})
    }
})


router.get('/stories/:id', async(req, res)=>{
    try {
        const {id: storyID } = req.params
        const story = await Story.findOne({_id:storyID})
        if(!story){
            return res.status(404).json({msg:`no task with id: ${storyID}`})
        }
        res.status(200).json({ story })
    } catch (error) {
        res.status(500).json({msg: error})
    }
    res.json({id : req.params.id})
})


router.patch('/stories/edit-story/:id', async(req, res)=>{
    try {
        const {id: storyID } = req.params
        const story = await Story.findOneAndUpdate({_id:storyID}, req.body,{
            new: true,
            runValidators: true
        })

        if(!story){
            return res.status(404).json({msg:`no story with id: ${storyID}`})
        }
        res.status(200).json({ story })
    } catch (error) {
        res.status(500).json({msg: error})

    }
})

//photographs
router.get('/photograph', async(req, res)=>{
    try {
        const photographs = await Photograph.find({})
        res.status(200).json({ photographs })
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

router.get('/photograph/:id', async(req, res)=>{
    try {
        const {id: photoID } = req.params
        const photograph = await Photograph.findOne({_id:photoID})
        if(!photograph){
            return res.status(404).json({msg:`no photo with id: ${photoID}`})
        }
        res.status(200).json({ photograph })
    } catch (error) {
        res.status(500).json({msg: error})
    }
    res.json({id : req.params.id})
})


module.exports = router