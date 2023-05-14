const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello world, but mainly hello class!');
});

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;