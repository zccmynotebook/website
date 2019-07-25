let txt=document.querySelector('#txt');
let img=document.querySelector('img')
let caption=document.querySelector('#caption')
let preview=document.querySelector('#preview')
let file=document.querySelector('#file')
let save=document.querySelector("#save")
let canvas=document.querySelector('#canvas')
let ctx=canvas.getContext('2d');
ctx.font="16px Georgia";
let txtwidth=ctx.measureText(txt.value).width
//canvas.width=txtwidth
img.crossOrigin="anonymous";
img.setAttribute("crossOrigin",'Anonymous')
preview.onclick=function(){
   getImg() 
   caption.textContent=txt.value
}
file.oninput=getImg
save.onclick=function(){
   ctx.clearRect(0,0,canvas.width,canvas.height)
   ctx.drawImage(img,0,0,80,80)
   ctx.fillText(txt.value,12,96,txtwidth)
   let i=canvas.toDataURL('image/png')
   save.href=i; 
}
function getImg(){
   let reader=new FileReader()
   reader.readAsDataURL(file.files[0])
   reader.onload=function(e){
      img.src=e.target.result
   }  
}
 