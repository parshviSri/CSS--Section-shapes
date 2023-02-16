const block = document.querySelectorAll("main");
console.log(block);
document.addEventListener("mousemove",(e)=>{
    rotateElement(e,block[1])
})
function rotateElement(event,element){
    const x= event.clientX;
    const y = event.clientY;
    const middleX= window.innerWidth/2;
    const middleY = window.innerHeight/2;
    const offsetX= ((x-middleX)/middleX)*45;
    const offsetY =((y-middleY)/middleY)*45;
    element.style.setProperty("--rotateX",offsetX+"deg");
    element.style.setProperty("--rotateY",-1*offsetY+"deg");
}