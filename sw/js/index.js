console.log('welcome to js world')
let btn=document.querySelector('#btn')
btn.onclick=function(){
    let xhr = new XMLHttpRequest()
    xhr.open('get','js/city.json')
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            let obj=JSON.parse(xhr.response)
            for(let i in obj){
                console.log(i,'=',obj[i])
            }
        }
    }
    xhr.send()
}