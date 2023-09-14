// async function Logmovie(){
//     const response = await fetch("http://example.com/movies.json");
//     const movies = response.json();
//     console.log(movies);
// }
 

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

generateJoke()
jokeBtn.addEventListener("click", generateJoke)


function generateJoke(){

    const config = {
        headers:{
            "accept":"application/json"
        }
    }


    fetch("https://icanhazdadjoke.com/", config)
    .then((response) => response.json())
    .then((answer) => {
        jokeEl.innerHTML = answer.joke
    })
}


