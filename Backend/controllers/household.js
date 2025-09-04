const express = require('express');
const router = express.Router();


router.get("/households" , async (req,res) =>{
    try{
        const households = await Household.find();
        res.status(200).json(households);
    }catch (error) {
        res.status(500).json({message : "Error in fetching households"});
    }
})

module.exports = router;