let fs=require('fs')
let list=fs.readdirSync('./pages')
//console.log(list)
let str=list.map(v=>{
  return `<li><a href="./pages/${v}" target="_blank">${v}</a></li>`
})
let data=`
<html>
<body>
<ol>
${str.join(' ')}
</ol>
</body>
</html>
`
fs.writeFileSync('./index.html',data)