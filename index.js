const Koa = require('koa')
const path = require('path')
const fs=require('fs')
const static = require('koa-static')
//const Router = require('koa-router')

const app = new Koa()

// let router = new Router()
// app.use(router.routes());   

app.use(static(
  path.join( __dirname,  './assets')
))
app.use(static(
  path.join( __dirname,  './pages')
))

app.use( async ( ctx ) => {
  let url = ctx.url
  if(url.endsWith('html')){
    ctx.type='text/html;charset=utf-8';
    ctx.body=fs.readFileSync(`.${ctx.url}`)
  }else if(url.endsWith('eventsource')){
    ctx.type='text/event-stream;charset=utf-8';
    ctx.body=`event: custom\n data: ${new Date()}\n\n`
  } else if(url.endsWith('test.css')){
    async function delay(time) {
       return new Promise(function(resolve, reject) {
         setTimeout(function(){
               resolve();
              }, time);
            });
         };
     await delay(5000);
      ctx.type='text/css';
      ctx.body=fs.readFileSync('./assets/css/test.css')
  } 
  else{
      // 从上下文的request对象中获取
      let request = ctx.request
      let req_query = request.query
      let req_querystring = request.querystring

      // 从上下文中直接获取
      let ctx_query = ctx.query
      let ctx_querystring = ctx.querystring

      ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
      }
  }
 
  console.log(ctx)
})

// router.use('/notification', page.routes(), page.allowedMethods())

// app.use( async ( ctx ) => {
//   ctx.body = 'hello koa2'
// })

app.listen(3001)
console.log('[demo] start-quick is starting at port 3000')