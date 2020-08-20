const express = require('express');
const router = express.Router();

const data = [
    {
        state: "Texas",
        population: 29900000,
    },
    {
        state: "Kansas",
        population: 2971364,
    }
]

router.get('/', (req, res) => {
    res.send(data)
})


router.post("/", (req, res) => {
    data.push({state: req.body.state, population: req.body.population})
    res.send(data);
})

module.exports = router;