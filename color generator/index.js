const containerEl=document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl=document.createElement("div");

    colorContainerEl.classList.add("color-container");

    containerEl.appendChild(colorContainerEl);
    
    
}

const colorContainerEl=document.querySelectorAll(".color-container");

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) =>{

        const newColorCode=randomColor()

    })

    
}

randomColor();

function randomColor(){
    const chars="0123456789abcdef";

    const colorCodeLength=6;

    let color=" ";

    for (let index = 0; index < colorCodeLength; index++) {

        const randomNum= Math.floor(math.random()*chars.length);

       color+= chars.substring(randomNum,randomNum+1);
       
       return colorCodes;
        
    }


}