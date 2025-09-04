const express = require('express');
const router = express.Router();


router.get("/painters" , async (req,res) =>{
    try{
        const painters = await Painter.find();
        res.status(200).json(painters);
    }catch (error) {
        res.status(500).json({message : "Error in fetching painters"});
    }
})

module.exports = router;