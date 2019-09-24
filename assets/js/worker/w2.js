self.onmessage=function(e){
  console.log('w2',e)
  const port = e.ports[0];
  // 由于在worker中无法使用console.log，因此我们通过给w2绑定onmessage回调函数来验证传递是否成功
  port.onmessage = function(e) {
      postMessage(e.data)
  }
}