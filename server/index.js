#!/usr/bin/env node

const http = require('http');
const spawn = require('child_process').spawn;
const data = require('./data.json');

const port = 8000;

http
  .createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };

    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }

    if (["GET", "POST"].indexOf(req.method) > -1) {
      res.writeHead(200, headers);
      // eslint-disable-next-line no-undef
      res.end(json.stringify(data));
      return;
    }

    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);
  })
  .listen(port);
