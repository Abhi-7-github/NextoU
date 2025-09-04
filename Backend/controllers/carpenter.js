const express = require('express');
const router = express.Router();


router.get("/carpenter" , async (req,res) =>{
    try{
        const carpenters = await Carpenter.find();
        res.status(200).json(carpenters);
    }catch (error) {
        res.status(500).json({message : "Error in fetching carpenters"});
    }
})

module.exports = router;