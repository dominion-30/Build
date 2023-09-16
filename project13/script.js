const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus()



textarea.addEventListener('keyup', (letter)=>{
    
     CreateTags(letter.target.value);

     if(letter.key === "Enter"){

        setTimeout(()=>{
             letter.target.value = ""
        }, 10)
        randomSelect()
     }
}
)


function CreateTags(input){
   
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())

    tagsEl.innerHTML = ""
    tags.forEach(tag => {

        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")

        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
        
    });
}


function randomSelect(){
    console.log(123)
}