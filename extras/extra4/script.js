const sounds = ['applause', 'tada','victory', 'wrong', 'boo', 'gasp']

sounds.forEach(sound=>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    document.getElementById("buttons").appendChild(btn)

    

    btn.addEventListener("click", ()=>{

        stopSongs()
        document.getElementById(sound).play()
    })
})

function stopSongs(){
    

    sounds.forEach(sound =>{

        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;

    })
}