const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use('/api', require('./routes/api/api'));

app.get('/', (req, res) => {
    res.send("Main Page")
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})