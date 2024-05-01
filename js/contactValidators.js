
const contactValidators = () => {
    const name = document.querySelector(".name");
    const completeName = document.querySelector("#completeName");
    completeName.addEventListener('input', (event) => {
        let valueInput = event.target.value
        if (valueInput.length == 0) {
            name.style.display = 'none';
        } else if (valueInput.length < 3 || valueInput.length > 40) {
            name.style.display = 'block';
        } else if (valueInput.length > 3 && valueInput.length <= 40)
            name.style.display = 'none';
    });
}

const emailValidators = () => {
    const email = document.getElementById("email");
    const errEmail = document.querySelector('.email');
    email.addEventListener('input', (event) => {
        valueEmail = event.target.value
        const validatorsEmail  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        console.log(validatorsEmail.test(valueEmail))
        if(!validatorsEmail.test(valueEmail)) {
            errEmail.style.display = 'block';
        } else {
            errEmail.style.display = 'none';
        } 
    });
   
}

const sendForm = (event) => {
     event.preventDefault();
     
}


contactValidators();
emailValidators();