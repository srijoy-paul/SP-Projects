const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('jokes');

const apiKey = 'FWs/98tHfAUzdOSKFAU/AA==oC4iMD2g2Ri4r6PK';
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

const options={
    method:'GET',
    headers:{
        "X-Api-Key": apiKey,   
    },

};
 async function getJoke(){
    try {
        jokeEl.innerHTML='updating...';
        btnEl.disable = 'true';
        btnEl.innerText='Loading...';
       const response = await fetch(apiURL , options); 
       const data = await response.json();
       jokeEl.innerHTML=data[0].joke;
       btnEl.disable = 'false';
       btnEl.innerText='TELL ME A JOKE';
    
    } catch (error) {
        jokeEl.innerHTML='An error occured, try again later'
        btnEl.disable = 'false';
       btnEl.innerText='TELL ME A JOKE';
        console.log(error)
        
    }
    
}
btnEl.addEventListener('click' , getJoke)