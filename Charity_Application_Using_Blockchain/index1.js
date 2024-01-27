const createbutton = document.getElementById('createbtn');
const boxContainer = document.getElementsByClassName('box-container')[0];

let Name;
let campaigntitle; 
let details;
let Amount;
let Enddate;
let Address;
let Link;
// let Btn=document.getElementsByClassName('btn');

const Crossicon=document.getElementsByClassName('cross-icon')[0];
Crossicon.onclick=()=>{
  document.getElementById('popup').classList.remove('active');
  document.getElementById('blur').classList.remove('active');
}

createbutton.addEventListener('click',()=>{

 Name = document.getElementById('name').value;
 campaigntitle = document.getElementById('campaign-title').value;
 details = document.getElementById('Details').value;
 Amount = document.getElementById('amount').value;
 Enddate = document.getElementById('end-date').value;
 Address  = document.getElementById('address').value;
 Link = document.getElementById('link').value;

 if(Name=="" || campaigntitle=="" || details=="" || Amount=="" || Enddate=="" || Address=="" || Link=="" )
 {
   document.getElementsByClassName('info')[0].style.visibility="visible";
 }
else{
  document.getElementById('blur').classList.remove('active');
  document.getElementById('popup').classList.remove('active');


    boxContainer.innerHTML+=` <div class="box">
    <img src=${Link} alt="">
    <h3>${campaigntitle} </h3>
    <p>${details}</p>
    <h4>Required Amount</h4>
    <div class="amount">${Amount} </div>
    <h4>End Date</h4>
    <div class="date">${Enddate} </div>
    <a href="index2.html" class="btn">Read more</a>
   </div>`

}

});


