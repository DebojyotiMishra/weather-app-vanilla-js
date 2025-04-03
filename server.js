require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Create a route to serve environment variables
app.get('/env.js', (req, res) => {
    res.send(`
        window.WEATHER_API_KEY = '${process.env.WEATHER_API_KEY}';
        window.DEFAULT_CITY = '${process.env.DEFAULT_CITY}';
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 