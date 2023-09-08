const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener(("click"), ()=>{
    search.classList.toggle("active");
    input.focus();
    
})



// const search = document.getElementsByClassName(".search");
// const button = document.getElementsByClassName(".button");

// button.addEventListener("click", ()=>{
//     search.classList.add("active");

// })