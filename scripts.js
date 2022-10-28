/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", loadDOM)
function loadDOM(){ 
    console.log("Website has Loaded!")
    displayMsg()
    console.log("Message has been updated")
}

function displayMsg(){
    var subscribe = document.getElementsByClassName('btn');
    if(subscribe){
        subscribe[1].addEventListener('click', (e) =>{
            e.preventDefault();
            var formemail= getInput();
            var valid = validateEmail(formemail);
            var display = document.getElementsByClassName('message');
            if(formemail == ""){
                display[0].textContent = "Please Enter a Valid Email Address.";
                display[0].classList.add("invalid");
            }
            else if (!valid){
                display[0].textContent = "Please Enter a Valid Email Address.";
                display[0].classList.add("invalid");
            }
            else{
                display[0].textContent = "Thank you! Your email address "+formemail+" has been added to our mailing list!";
                display[0].classList.add("valid");
            }
        })
    }
}
function getInput(){
    var inputemail = document.querySelector('input[name="email"]').value;
    return inputemail
}

 function validateEmail(inputValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputValue);
}