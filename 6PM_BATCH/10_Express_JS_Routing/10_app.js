const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

// middle ware to serve the static files
app.use('/public', express.static('public'));

// Application routing
router.mapRoutes(app);

app.listen(port,hostname, () => {
    console.log(`server is started at http://${hostname}:${port}`);
});
