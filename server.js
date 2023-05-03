const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Serve static files from the public directory
app.use(express.static('public'));

// Parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the root route to serve the index.html file
app.get("/", (req, res ) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define a GET route to retrieve note data from the API
app.get('/api/notes', (req, res) => {
    res.json([]);
});

// Mount the API and HTML routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server listening on the specified port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
