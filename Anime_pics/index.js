const btnEle = document.getElementById('btn');
const animeEle = document.getElementById('anime-img');
const nameEle = document.getElementById('name')
const containerEle = document.getElementById('container2')

// console.log(animeEle)

const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '966d5f8651msh20a180759698e2ap1dbd36jsn650fd3760242',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text(); 
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
 async function getAnime(){

    try {
        btnEle.disabled=true;
        btnEle.innerText="Loading..."
        nameEle.innerText='Updating...' 
       
    
        containerEle.style.display="block"
        animeEle.src = "spiner.svg"; 
    
        const response = await fetch(url , options);
        const data = await response.json()
        let index = Math.floor(Math.random()*8)
        animeEle.setAttribute('src' , data.data[index].image)  
        nameEle.innerText= data.data[index].title
    
        btnEle.disabled=false;
        btnEle.innerText="Get anime";
     

       
        
    } catch (error) {

        console.log(error)
        
    }

   

}

btnEle.addEventListener('click',getAnime)