const express = require('express');
const router = express.Router();


router.get("/electricians" , async (req,res) =>{
    try{
        const electricians = await Electrician.find();
        res.status(200).json(electricians);
    }catch (error) {
        res.status(500).json({message : "Error in fetching electricians"});
    }
})

module.exports = router;