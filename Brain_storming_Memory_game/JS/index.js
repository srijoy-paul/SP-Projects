let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/css-beginners-tutorial.jpg',
    },
    
    {
        'name': 'HTML',
        'img': 'https://logodix.com/logo/470322.png',
    },
    {
        'name': 'jQuery',
        'img': 'https://play-lh.googleusercontent.com/LpgnH_rHqhJzlJ-uWhfMj3w87cu6iWV5m1hr6eos1wmdlqRiF0RsNE1RBmgtsPvyyBI',
    },
    {
        'name': 'JS',
        'img': 'https://th.bing.com/th/id/OIP.GEp2gd_Hrgk0HtqvyXnajwHaHa?rs=1&pid=ImgDetMain',
    },
    {
        'name': 'Node',
        'img': 'https://pinocks.com/images/news_views/2018-10-07-why-choose-node-js-development.jpg',
    },
    {
        'name': 'Python',
        'img': 'https://i.pinimg.com/736x/ba/4f/e7/ba4fe7383b8d9f538dacbb7c1dcf2d54.jpg',
    }
];

const parentDiv = document.querySelector('#card-section');

const gameCard = cardsArray.concat(cardsArray); 

const myNumbers = (array)=>{ 
    for(let i=array.length-1 ; i>=0 ; i--){  
        let j=Math.floor(Math.random()*(i+1));
        // console.log(i,j)
        let temp = array[i];
        array[i]=array[j];   
        array[j]=temp;
    }

    return array;

}

let shuffledChild = myNumbers(gameCard)
// let shuffledChild = Array.from(gameCard).sort(compareFn:()=> 0.5- Math.random());
// console.log(shuffledChild)
let clickCount = 0;
let firstcard ="";
let secondcard ="";

let cardMatchs = ()=>{
    let card_selected = document.querySelectorAll('.card-selected');
    card_selected.forEach(currele => {
        currele.classList.add('card-match');
        console.log(currele)
        
    });

}

let resetCard = ()=>{
    firstcard="";
    secondcard="";
    clickCount=0;

    let card_selected = document.querySelectorAll('.card-selected');
    card_selected.forEach(currele => {
        currele.classList.remove('card-selected');
        console.log(currele)
     
        
    });


}
parentDiv.addEventListener('click' ,(event)=>{
   let curCard = event.target;

   if(curCard.id === 'card-section'){ return false} 
 
   clickCount++;
   if(clickCount<3){

    if(clickCount === 1){
        firstcard=curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card-selected');   
        console.log(firstcard)
    }
    else{
        secondcard=curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card-selected');
        console.log(secondcard)
    }

    if(firstcard !== "" && secondcard !==""){
        if(firstcard=== secondcard){
            setTimeout(()=>{

                cardMatchs();
                resetCard();  

            },1000);
           
        }
        else{
            setTimeout(()=>{

                resetCard();  
                
            },1000);
        }
       
    }
    console.log(curCard)

}


   
    
   
})

for(let i =0 ; i<shuffledChild.length ; i++){ 

    const classDiv = document.createElement("div");
    classDiv.classList.add("cards");
    classDiv.dataset.name = shuffledChild[i].name;
    // classDiv.style.backgroundImage= `Url(${shuffledChild[i].img})`;
    parentDiv.appendChild(classDiv);

    const front_card = document.createElement("div");
    front_card.classList.add("frontcard");

    const back_card = document.createElement("div");
    back_card.classList.add("backcard");

   
    

    back_card.style.backgroundImage = `Url(${shuffledChild[i].img})`

    classDiv.appendChild(front_card);
    classDiv.appendChild(back_card);
    
}
console.log(parentDiv)






