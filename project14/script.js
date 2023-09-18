const navigation = document.getElementById("nav");
const toggle = document.getElementById("toggle")

toggle.addEventListener("click", ()=>{
    navigation.classList.toggle("active");
})