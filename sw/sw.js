
//当前缓存版本 的唯一标识符，用当前时间代替
let cacheKey = new Date().toISOString();
//当前缓存的自名单 ，在新脚本的 install 事件里将使用自名单里的 key
let cacheWhitelist = [cacheKey] ;
//需要被缓存的文件的 URL 列表
var cacheFileList = [
   '/','/index.html','/css/a.css','/js/index.js','/js/city.json'
]
//监听 install 事件
self.addEventListener('install',function(event){
    console.log('install')
    //等所有资源缓存完成时，才可以进行下一步
    event.waitUntil(
        caches.open(cacheKey).then(function(cache){
            //要缓存的文件 URL 列表
            cache.addAll(cacheFileList)
        })
    )
})
//拦截网络请求
self.addEventListener('fetch',function(event){
    console.log('fetch')
    event.respondWith(caches.match(event.request).then(function(response){
            //如果命中缓存，直接返回，否则请求服务器
            if(response) return response
            return fetch(event.request)
    }))
})

//新的 Service workers 线程取得控制权后，将会触发 activate 事件
self.addEventListener('activate',function(event){
    console.log('activate')
    event.waitUntil(
        caches.keys().then(function(cachenames){
             return Promise.all(
                 cachenames.map(function(name){
                     //将不在白名单中的缓存全部清理掉
                     if(!cacheWhitelist.includes(name)){
                         return caches.delete(name)
                     }
                 })
             )
        })
    )
})


self.addEventListener('push', function(event) {
    console.log('push')
    var obj = event.data.text();
    fireNotification(obj, event);
  });
  
  function fireNotification(obj, event) {
    var title = '订阅消息';  
    var body = obj;
    var icon = 'push-icon.png';  
    var tag = 'push';
     
    //event.waitUntil(
     self.registration.showNotification(title, {
      body: body,  
      icon: icon,  
      tag: tag  
    })
    //);
  }