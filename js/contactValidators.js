
const contactValidators = () => {
    const name = document.querySelector(".name");
    const completeName = document.querySelector("#completeName");
    completeName.addEventListener('input', (event) => {
            let valueInput = event.target.value
            if (valueInput.length < 3 || valueInput.length > 40) {
                name.style.display = 'block';
            }else if(valueInput.length > 3 && valueInput.length <=40)
            name.style.display = 'none'; 
        });
}


contactValidators();