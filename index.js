const express = require('express');
const app = express();
require('./db/db'); 
const cors = require('cors');
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
  }));
  

// Use the routes
app.use(require('./routes/routes')); 

// Start the server
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
