fetch("https://randomuser.me/api/?page=3&results=3&seed=ttttttaa&nat=es&inc=gender,name,dob,picture&noinfo")
    .then((response) => response.json())
    .then((data) => {
        //  console.log(data);
        for (let i = 0; i < 4; i++) {
            const user = data.results[i];
            const name = user.name.first + " " + user.name.last;
            const img_case = user.picture.large;

            let cases_item = document.querySelectorAll(".case-item");
            let case_item_name = document.querySelectorAll(".case-item-name");
            const element = cases_item[i].setAttribute("src", img_case);
            const element_name = case_item_name[i].innerHTML = name;
        }
    });

    // page=3&results=10&seed=abc