let feedbackEl = document.getElementsByClassName("reaction");
feedbackEl = [...feedbackEl];
const btnEl = document.querySelector(".btn");
const container1El = document.querySelector(".container1");
const container2El = document.querySelector(".container2");
const feedEl = document.querySelector(".feed");
container2El.style.display = "none";

let feedback_data = "";

function getFeedback(event) {
  let id = event.target.getAttribute("id");

  feedbackEl.map((currele) => {
    let id2 = currele.getAttribute("id");

    if (id === id2) {
      // currele.parentNode.classList.add("active"); 
      currele.classList.add("active");
    } else {
      // currele.parentNode.classList.remove("active"); 
      currele.classList.remove("active");
    }
  });

  feedback_data = event.target.innerText || event.target.parentNode.innerText;

  //  console.log( event.target.parentNode);
}

for (let i = 0; i < feedbackEl.length; i++) {
  feedbackEl[i].addEventListener("click", getFeedback);
}

btnEl.addEventListener("click", function sendReview() {
  if (feedback_data !== "") {
    let send_feedback = feedback_data;
    container1El.style.display = "none";
    container2El.style.display = "block";
    feedEl.innerHTML = send_feedback;
  } else {
    alert("Please, first give your Feedback");
  }
});
