self.onmessage=function(e){
  console.log('w1',e)
  e.ports[0].postMessage('from worker1---'+e.data)
}