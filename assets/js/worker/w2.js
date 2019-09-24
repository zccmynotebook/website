self.onmessage=function(e){
  console.log('w2',e)
  const port = e.ports[0];
  port.onmessage = function(e) {
      postMessage(e.data)
  }
}