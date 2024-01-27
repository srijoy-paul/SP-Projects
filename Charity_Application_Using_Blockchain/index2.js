
let flag=0;

function controller(x)
{

    flag=flag+x;
    slideShow(flag);

}

slideShow(flag);


function slideShow(num){
    let Slide=document.getElementsByClassName('slide');

    if(num==Slide.length){
        num=0;
        flag=0;
    }
    if(num<0){
      num=Slide.length-1;
      flag=Slide.length-1;

    }

    for(let y of Slide){
        y.style.display="none";
    }
    Slide[num].style.display="block";
}