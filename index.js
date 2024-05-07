const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/task.routes');

const app = express();
app.use(bodyParser.json());
// Mount the routes
app.use('/api', routes);

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});