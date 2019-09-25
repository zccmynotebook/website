self.onmessage=function(e){
  console.log('w2',e)
  const port = e.ports[0];
  port.postMessage('w2-port')
  port.onmessage = function(e) {
      postMessage(e.data)
  }
}