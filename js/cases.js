/**
 * This code is executed when the page is loaded.
 * This code fetches 3 random users from the API and sets their name and image in the HTML.
 * The API used is randomuser.me, which provides a free API for generating random user data.
 * The API is called using the fetch() method, which returns a Promise that resolves to a Response object.
 * If an error occurs during the fetch, it is caught and logged to the console.
 */
fetch("https://randomuser.me/api/?page=3&results=3&seed=amtabcda&nat=es&inc=gender,name,dob,picture&noinfo")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < 4; i++) {
            const user = data.results[i];
            const name = user.name.first + " " + user.name.last;
            const img_case = user.picture.large;

            let cases_item = document.querySelectorAll(".case-item");
            let case_item_name = document.querySelectorAll(".case-item-name");
            cases_item[i].setAttribute("src", img_case);
            case_item_name[i].innerHTML = name;
        }
    })
    .catch((error) => {
        console.error(error);
    });