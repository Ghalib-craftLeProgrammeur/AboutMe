const express = require('express');
const path = require('path');

const app = express();

// Define a route that redirects to the "public" directory


// Serve static files from the "public" directory
app.use('/', express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
