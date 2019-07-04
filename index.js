const Koa = require('koa')
const path = require('path')
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
  console.log(ctx)
})

// router.use('/notification', page.routes(), page.allowedMethods())

// app.use( async ( ctx ) => {
//   ctx.body = 'hello koa2'
// })

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')