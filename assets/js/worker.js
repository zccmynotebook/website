this.onmessage = event=>{
    done(event.data)
}
function done(obj){
    console.log(`子线程接收到的数据是：${obj.num}`)
    obj.num+=2;
    postMessage(obj)
}