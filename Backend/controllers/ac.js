const express = require('express');
const router = express.Router();


router.get("/ac" , async (req,res) =>{
    try{
        const acs = await AC.find();
        res.status(200).json(acs);
    }catch (error) {
        res.status(500).json({message : "Error in fetching ACs"});
    }
})

module.exports = router;