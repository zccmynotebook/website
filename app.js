let fs=require('fs')
let list=fs.readdirSync('./pages')
//console.log(list)
let str=list.map(v=>{
  return `<a href="./pages/${v}" target="_blank">${v}</a>`
})
let data=`
<html>
<body>
${str.join(' ')}
</body>
</html>
`
fs.writeFileSync('./index.html',data)