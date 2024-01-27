const navbarEl=document.querySelector(".navbar");




 const workingEl=document.querySelector(".working");

 console.log(navbarEl.offsetHeight);

console.log(workingEl.offsetTop);

window.addEventListener("scroll", ()=>{

    if(window.scrollY>workingEl.offsetTop-navbarEl.offsetHeight-50){
        navbarEl.classList.add("active")
    }
    else{
        navbarEl.classList.remove("active");
    }
    // console.log(window.scrollY);
})