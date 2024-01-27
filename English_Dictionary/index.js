let paraEl = document.getElementsByClassName("para")[0];
let inputEl = document.getElementsByClassName("inpt");
const containerEl = document.getElementsByClassName("container2")[0];
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

inputEl = Array.from(inputEl);
// paraEl = Array.from(paraEl)

function Fetchapi(word) {
  try {
    let data=  fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`  
    ).then((res)=>{
      return res.json()}).then((data)=>{let length = data[0].meanings[0].definitions.length;

        let index = Math.floor(Math.random() * length);
    
        let meaning = data[0].meanings[0].definitions[index].definition;
    
        paraEl.style.display = "none";
    
        containerEl.style.display = "block";
    
        titleEl.innerText = `"${word}"`;
    
        meaningEl.innerText = `"${meaning}"`;
    
        if (data[0].phonetics[0].audio !== "") {
          audioEl.setAttribute("src", data[0].phonetics[0].audio);
        } else {
          audioEl.setAttribute("src", data[0].phonetics[1].audio);
        }}) 
    // let data = await data.json();
    // console.log(data)
    
  } catch (error) {
    alert("Please, check the validity of the word ");
  }
}

inputEl.forEach((el) => {
  el.addEventListener("keypress", (event) => {
    let word = event.target.value;
    if (event.key === "Enter") {
      paraEl.innerText = `Searching the meaning: "${word}"`;

      Fetchapi(word);
    }
  });
});
