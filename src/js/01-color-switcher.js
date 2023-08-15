const btnStart=document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]');

let intervalId = null;


btnStart.addEventListener('click', ()=>{
    
    intervalId=setInterval(()=>{
    btnStart.parentNode.style.backgroundColor = getRandomHexColor()
        btnStart.disabled = true;
        stopBtn.disabled = false;
},1000);
});

stopBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    btnStart.disabled=false;
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}