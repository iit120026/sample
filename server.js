const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'Angular/angular-sample/dist')));


app.get('/', function(req, res){
 //res.send('<h1>Hello World</h1>')
  res.sendFile(path.join(__dirname, 'Angular/angular-sample/dist'));
});

