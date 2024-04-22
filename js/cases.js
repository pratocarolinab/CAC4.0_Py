// This code is executed when the page is loaded.
// This code fetches 3 random users from the API and sets their name and image in the HTML.
// The API used is randomuser.me, which provides a free API for generating random user data.
// The API is called using the fetch() method, which returns a Promise that resolves to a Response object.
// If an error occurs during the fetch, it is caught and logged to the console.

let promise = fetch("https://randomuser.me/api/?page=3&results=3&seed=ttttttaa&nat=es&inc=gender,name,dob,picture&noinfo")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < 4; i++) {
            const user = data.results[i];
            const name = user.name.first + " " + user.name.last;
            const img_case = user.picture.large;

            let cases_item = document.querySelectorAll(".case-item");
            let case_item_name = document.querySelectorAll(".case-item-name");
            let element = cases_item[i].setAttribute("src", img_case);
            let element_name = case_item_name[i].innerHTML = name;
        }
    })
    .catch((error) => {
        console.error(error);
    });







// This code is used to create a slider effect on the website.
// It uses the setInterval function to change the background image of the slider every 2.5 seconds.
// The images used in this code are stored in the SLIDE__IMG array.
// The sliderPosition variable is used to keep track of the current image being displayed.
// The passImages function is called every 2.5 seconds to change the background image and update the sliderPosition variable.
// The sliderPosition variable is incremented or reset to 0 if it reaches the end of the array.
// The sliderPosition variable is used to set the background image of the slider using the style.backgroundImage property.
// The sliderPosition variable is also used to set the background position of the slider using the style.backgroundPosition property.
// The sliderPosition variable is incremented or reset to 0 if it reaches the end of the array.
// The setInterval function is used to call the passImages function every 2.5 seconds.
/*window.onload = function() {
    const SLIDE__IMG = [
        'assets/img/avatars-1.png',
        'assets/img/avatars-2.png',
        'assets/img/avatars-3.png',
        'assets/img/avatars-4.png',];

    let slidePosition = 0;
    function passImages() {
        if (slidePosition >= SLIDE__IMG.length - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        document.getElementById("slider_imagen").style.backgroundImage = `url(${SLIDE__IMG[slidePosition]})`;
        // document.getElementById("slider_imagen").style.backgroundPosition = "center";
    }
    passImages();
    setInterval(passImages, 2500);
}*/