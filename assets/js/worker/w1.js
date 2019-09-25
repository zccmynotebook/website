self.onmessage=function(e){
  console.log('w1',e)
  const port = e.ports[0];
  postMessage('w1,not port1')
  port.postMessage('msg from worker1---'+e.data)
  port.onmessage = function(e) {
    postMessage(e.data)
  }  
  e.ports[1].postMessage('from ch1 port2')
}