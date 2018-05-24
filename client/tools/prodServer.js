/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { chalkProcessing } from './chalkConfig';
var proxy = require('express-http-proxy');


const port = process.env.PORT || 9888

console.log(chalkProcessing(`Opening production build on port: ${port}`));

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/api', proxy('http://127.0.0.1:9999/api', {
  // this passes any URL params on to the external api
  // eg /api/user/1234 -> example.com/api/user/1234
  forwardPath: (req, res) => '/api' + (url.parse(req.url).path === '/' ? '' : url.parse(req.url).path)

// tell it to use port 3000 - localhost:3000
})).listen(3000);

app.listen(port, () => {
  console.log(`SpotiWOW App Server running on port: ${port} in production mode!`)
});
