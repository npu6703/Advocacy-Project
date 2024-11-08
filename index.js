// Add JavaScript code for your web site here and call it from index.html.
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // Write your code to manipulate the DOM here

}
themeButton.addEventListener("click", toggleDarkMode);

let signNowButton = document.querySelector("#sign-now-button")
const addSignature = (event) => {
    // event.preventDefault; 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const craft = document.getElementById("craft").value;
    const newSignature = document.createElement("p");
    newSignature.textContent = ' 🖊️' + name + ' wants to contribute in' + craft;
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
    // TODO: Loop through all inputs
    for(let i = 0; i < petitionInputs.length; i++){
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true; 
            petitionInputs[i].classList.add('error');
            
        }
        else {
            petitionInputs[i].classList.remove('error');
          }
    }

    if(containsErrors == false){
        addSignature(); 
        for(let i = 0; i < petitionInputs.length; i++){
            petitionInputs[i].value = "";
            containsErrors = false;
        }
    }
    const email = document.getElementById('email');
    if (!email.value.includes('.com')) {
        containsErrors - true; 
        email.classList.add('error');
    }
    else {
        email.classList.remove('error');
    }
    
    // TODO: Validate the value of each input
  
  
  
    // TODO: Call addSignature() and clear fields if no errors
  
  }
  
  signNowButton.addEventListener('click', validateForm);