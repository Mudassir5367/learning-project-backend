const express = require('express');
const app = express();
require('./db/db'); // Assuming your db connection file is correct
const cors = require('cors');
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Use the routes
app.use(require('./routes/routes')); // This should work now if routes.js is properly set up

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
