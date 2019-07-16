let txt=document.querySelector('#txt');
let img=document.querySelector('img')
let caption=document.querySelector('#caption')
let preview=document.querySelector('#preview')
let save=document.querySelector("#save")
let canvas=document.querySelector('#canvas')
let ctx=canvas.getContext('2d');
ctx.font="16px Georgia";
img.crossOrigin="anonymous";
img.setAttribute("crossOrigin",'Anonymous')
preview.onclick=function(){
  //caption.textContent=txt.value
   ctx.clearRect(0,0,100,100)
   ctx.drawImage(img,0,0,80,80)
   ctx.fillText(txt.value,12,96,100)
}
save.onclick=function(){
   let i=canvas.toDataURL('image/png')
   save.href=i;
  
}