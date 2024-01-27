const textareaEl=document.getElementsByClassName("textarea");

const  characterEl=document.getElementsByClassName("character");

const remainingEl=document.getElementsByClassName("remaining");

textareaEl.addEventListener("keyup" , ()=>{

    updateCounter();
})

function updateCounter()
{
    characterEl.innerText=textareaEl.value.length;
    
    remainingEl.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length;
}


