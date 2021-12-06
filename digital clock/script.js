var dt = new Date();

function refresh(){
    window.location.reload();
}

const hour = document.getElementById("hour");
hour.innerHTML = dt.getHours();
hour.classList.add('h');
setInterval(() => { refresh()
}, 3600000 );

const minute = document.getElementById("minute");
minute.innerHTML = dt.getMinutes();
minute.classList.add('m');
setInterval(() => { refresh()
}, 60000);

const second = document.getElementById("second");
second.innerHTML = dt.getSeconds();
second.classList.add('s');
setInterval(() => { refresh()
}, 1000);
