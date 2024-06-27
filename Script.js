let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoQuieto");
let botonSonido = new Audio ("./sound/botonbailar.mp3");
let botonAudio = new Audio ("./sound/Andrew Gold - Spooky Scary Skeletons (Undead Tombstone Remix) (Official Lyric Video).mp3");
function bailar(){
    if (esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener("click",()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener("click",()=>{
            botonAudio.play();
        })
        /*console.log("On");*/
    }else{
    esqueleto = "off";
    esqueletoStop.classList.remove("on");
    esqueletoStop.addEventListener("click",()=>{
        botonAudio.pause();
    })
/* console.log("off");*/
    }  
}
    

    

