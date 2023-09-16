
const insert = document.getElementById("insert")


window.addEventListener("keydown", (letter)=>{

    insert.innerHTML = `
    <div class="key">
            ${letter.key === " " ? "Space" : letter.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${letter.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${letter.code}
            <small>event.code</small>
        </div>
    `

    console.log(letter);

})