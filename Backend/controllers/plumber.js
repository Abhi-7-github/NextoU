const express = require('express');
const router = express.Router();

router.get("/plumbers", async (req,res) => {
    try{
        const plumbers = await Plumber.find();
        res.status(200).json(plumbers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching plumbers" });
    }
});

module.exports = router;
