// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal')

// Your JavaScript code goes here!
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM CONTENT HAS LOADED")
    //Add the .hidden class to the error modal in the html so it does not appear when the page first loads
    hideError();
    //Invoke mimicServerCall when empty heart is clicked
    findLikes();
  })
  function hideError() {
    errorModal.classList.add("hidden")
  }
  
  function findLikes() {
    const likeArr = document.querySelectorAll(".like_glyph")

    likeArr.forEach((singularLike) => {
      singularLike.addEventListener("click", (event) => mimicServerCall()
      .then(resp => {
        const activatedHeart = event.target.classList.contains('activated-heart')
        if(activatedHeart) {
          event.target.classList.remove('activated-heart')
          event.target.innerHTML = EMPTY_HEART
        }else {
          event.target.classList.add('activated-heart')
          event.target.innerHTML = FULL_HEART
        }
      }) // .300 ms
      .catch(error => {errorModal.classList.remove("hidden")
      setTimeout(hideError,3000)})) // promise fails .catch -> catches it
    })
  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
