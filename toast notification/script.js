const btn = document.getElementById('btn');
const notification =  document.getElementById('container');

btn.addEventListener('click' ,  ()=> {
    funnot();
 });

 function funnot(){
     const notif = document.createElement('div')
     notif.classList.add('toast');
     notif.innerText = "this is crazy boss";
     container.appendChild(notif);

     setTimeout(()=>{
         notif.remove();
    } , 3000);
 }