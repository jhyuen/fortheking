const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Redirect all routes to index.html (for SPA handling)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});