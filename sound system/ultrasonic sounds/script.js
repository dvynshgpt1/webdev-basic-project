const sounds = [ "8khz" , "10khz" , "12khz" , "14khz" , "15khz" ,"16khz" , "17khz" , "18khz" , "19khz" ,"20khz" , "21khz" , "22khz"];

sounds.forEach((sound)=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = sound;

    btn.addEventListener("click" , ()=>{
        stopsongs();
        document.getElementById(sound).play
        ();
    });
    document.body.appendChild(btn);
});

function stopsongs(){
    sounds.forEach((sound)=>{
     const songs =    document.getElementById(sound);
        songs.pause();
        songs.currentTime = 0;
    });
}
