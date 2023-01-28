const Advert = require('../models/Advert')
const express = require('express');
const router = express.Router()

router.post('/advert', async(req, res)=>{
    try {
        const advert = await Advert.create(req.body)
        res.status(201).json({ advert })
    } catch (error) {
        res.status(500).json({msg: error})
    }
})


module.exports = router