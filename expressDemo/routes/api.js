const express = require('express')
const router = express.Router();

router.get('/home' , (req , res) => {
    res.send('Api Demo');
});

router.get('/create' , (req , res) => {
    res.send('Create Demo !')
})


module.exports = router;