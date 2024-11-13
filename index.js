// Add JavaScript code for your web site here and call it from index.html.
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // Write your code to manipulate the DOM here

}
themeButton.addEventListener("click", toggleDarkMode);

let signNowButton = document.querySelector("#sign-now-button")
const addSignature = (person) => {
    // event.preventDefault; 
    const newSignature = document.createElement("p");
    newSignature.textContent = ' 🖊️'+ person.name +' wants to contribute in' + person.craft;
// Find the signatures section and append the new signature
const signaturesSection = document.querySelector(".signatures");
signaturesSection.appendChild(newSignature);

// Optional: Clear the form fields after submission
document.getElementById("sign-petition").reset();
}
// Add event listener for the Sign Now button to trigger the addSignature function
// signNowButton.addEventListener("click", addSignature);




const validateForm = () => {

    let containsErrors = false;
  
    var petitionInputs = document.getElementById("sign-petition").elements;
    let person ={
        name: petitionInputs["name"].value,
        email: petitionInputs["email"].value,
        craft: petitionInputs["craft"].value
    }
    // TODO: Loop through all inputs
    for(let i = 0; i < petitionInputs.length; i++){
        const email = document.getElementById('email');
        if (person.name.length < 2) {
            containsErrors = true; 
            petitionInputs["name"].classList.add('error');
            
        }
        else {
            petitionInputs["name"].classList.remove('error');
        }
        if ( person.craft.length < 2) {
            containsErrors = true; 
            petitionInputs["craft"].classList.add('error');
            
        }
        else {
            petitionInputs["craft"].classList.remove('error');
        }
        if ( person.email.length < 2) {
            containsErrors = true; 
            petitionInputs["email"].classList.add('error');
            
        }
        else {
            petitionInputs["email"].classList.remove('error');
        }
        if (!email.value.includes('.com')) {
            containsErrors = true; 
            petitionInputs["email"].classList.add('error');
        }
        else {
            petitionInputs["email"].classList.remove('error');
        }

    }

    if(containsErrors == false){
        addSignature(person); 
        toggleModal(person); 
        for(let i = 0; i < petitionInputs.length; i++){
            petitionInputs[i].value = "";
            containsErrors = false;
        }
    }
    
    // TODO: Validate the value of each input
  
  
  
    // TODO: Call addSignature() and clear fields if no errors
  
  }
  
  signNowButton.addEventListener('click', validateForm);


  let animation ={
    revealDistance: 150,
    initualOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease',
  }

  
  let revealableContainers = document.querySelectorAll(".revealable"); 
  const reveal = () => {
    for(i =0; i < revealableContainers.length; i++){
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            revealableContainers[i].classList.add("active"); 
          } else {
            revealableContainers[i].classList.remove("active"); 
          }
    }
  };

  window.addEventListener("scroll", reveal);

  const reduceMotion =() => {
    animation.transitionDelay = 7; 
    for(i =0; i < revealableContainers.length; i++){
        revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    }
  }
  window.addEventListener("click", reduceMotion); 


  const toggleModal = (person) => {
    const modal = document.getElementById("thanks-modal");
    const modalContent = document.getElementById("thanks-modal-content");

    // Show the modal
    modal.style.display = "flex"; 
    modalContent.textContent = 'Thank you so much ' + person.name + ' for joining us!'; 

    // Hide the modal after 4 seconds
    setTimeout(() => {
        modal.style.display = "none"; 
        clearInterval(intervalID); 
    }, 4000);

    const intervalId = setInterval(scaleImage, 500);

};

let scaleFactor = 1; 
const modalImage = document.getElementById('img-modal');
const scaleImage =() => {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1; 
    modalImage.style.transform = `scale(${scaleFactor})`; 
}

let button_modal = document.getElementById('button-modal');

const close_modal = () => {
    const modal = document.getElementById("thanks-modal");
    modal.style.display = "none";  // Hide the modal when close button is clicked
}

button_modal.addEventListener("click", close_modal);
  

