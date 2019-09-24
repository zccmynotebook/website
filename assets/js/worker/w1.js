self.onmessage=function(e){
  console.log('w1',e)
  e.ports[0].postMessage('w1')
}