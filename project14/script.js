const btns = document.querySelector('.btn');
// const close = document.getElementById('close');
// const open  = document.getElementById('open');

const panel = document.querySelector(".panel");

btns.addEventListener("click", ()=>{
    panel.classList.toggle("active");
    
})

// btns.addEventListener("click", ()=>{
//     panel.classList.remove("active");
    
// })
