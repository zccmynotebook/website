var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
   
  if (req.headers.accept && req.headers.accept == 'text/event-stream') {
    if (req.url.endsWith('/events')) {
      sendSSE(req, res);
    } else {
      res.writeHead(404);
      res.end();
    }
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync(__dirname + '/pages/eventsource.html'));
    res.end();
  }
}).listen(8000);

function sendSSE(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  var id = (new Date()).toLocaleTimeString();

  // Sends a SSE every 5 seconds on a single connection.
  setInterval(function() {
    constructSSE(res, id, (new Date()).toLocaleString());
  }, 5000);

  constructSSE(res, id, (new Date()).toLocaleString());
}

function constructSSE(res, id, data) {
  res.write('id: ' + id + '\n');
  res.write("data: " + data + '\n\n');
  res.write('event:  status'  + '\n');
  res.write("data: ok"  + '\n\n');
}
 